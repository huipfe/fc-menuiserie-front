import { Component, OnInit } from '@angular/core';
import { Horaire } from 'src/app/models/horaire/horaire.model';
import { HoraireService } from 'src/app/service/horaire/horaire.service';
import { MatDialog } from '@angular/material/dialog';
import { PopinConfirmationComponent } from 'src/app/popin-confirmation/popin-confirmation.component';
import { Jour } from 'src/app/models/enum/jour.enum';
import { PopinHoraireComponent } from 'src/app/popin-horaire/popin-horaire.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})

export class AdminDashboardComponent implements OnInit{

horaires : Array<Horaire>;
isLoading = true;
editer : string;
supprimer: string;
displayedColumnsHoraire : Array<string>;
jours = Object.keys(Jour);

constructor(public horaireService: HoraireService,
            public dialog:MatDialog) { 
  this.horaires = [];
  this.editer = "modifier";
  this.supprimer = "supprimer";
  this.displayedColumnsHoraire = ['jour', 'heure_matin', 'heure_apres_midi', 'action'];
}


  ngOnInit(): void {
    this.horaireService.getAllHoraires().subscribe(lesHoraires => {
      lesHoraires.forEach((unHoraire : Horaire) => {
        this.horaires.push(new Horaire (unHoraire));
      });
      this.isLoading = false;
    });
}


  removeHoraire(element: Horaire) {
    const dialogRef = this.dialog.open(PopinConfirmationComponent);
    dialogRef.componentInstance.onSubmit.subscribe(event => {
      if (event) {
        this.horaireService.deleteHoraireById(element.horaire_id).subscribe(response => {
          this.horaires = this.horaires.filter(horaire => horaire.horaire_id != element.horaire_id)
        });
      }
    })
  }

  editHoraire(element : Horaire) {

  }

  createHoraire() {
    if(this.getJourAvailable().length > 0) {
      const dialogRef = this.dialog.open(PopinHoraireComponent, {
        data : {
          mode : Mode.CREATE,
          jours : this.getJourAvailable
        }
      });
      dialogRef.componentInstance.onSubmit.subscribe(event => {
          this.horaireService.createHoraire(event).subscribe(response => {
            this.horaires = []; 
            this.horaires.getAllHoraires().subscribe(response => {
              response.forEach((unHoraire : Horaire) => {
                this.horaires.push(new Horaire(unHoraire));
              });
            });
          });
      });
    }
  }

  getJourAvailable() : Array<string> {
    let jours : Array<string> = [];
    this.jours.forEach(jour => {
        let isAvailable = true; 
        this.horaires.forEach(horaire => {
          if (jour[horaire.jour] == jour) {
                isAvailable = false;
            }
        });
      if (isAvailable) {
        jours.push(jour);
      }
    });
    return jours;
  }
}

export enum Mode {
  CREATE,
  EDIT
}
