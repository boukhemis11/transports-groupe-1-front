import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import {StatutAdminService} from './auth/status-admin.service';
import { StatutChauffeurService } from './auth/status-chauffeur.service';
import { VosReservationsComponent } from './vos-reservations/vos-reservations.component';
import { ReserverUnVehiculeComponent } from './reserver-un-vehicule/reserver-un-vehicule.component';
import { PubAnnonceComponent } from './pub-annonce/pub-annonce.component';
import { ReserverCovoiturageComponent } from './reserver-covoiturage/reserver-covoiturage.component';
import { AnnoncesComponent } from './annonces/annonces.component';


const routes: Routes =  [
  // /tech accessible uniquement si connecté et admin
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService, StatutAdminService]},
  { path: 'connexion', component: AuthComponent},
  { path: '', redirectTo: 'collaborateur', pathMatch: 'full'},
  // route collaborateur, seulement si connecté
  { path: 'collaborateur', component: CollaborateurComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/reservations', component: VosReservationsComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces', component: AnnoncesComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/reservations/creer', component: ReserverUnVehiculeComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces/creer', component: PubAnnonceComponent, canActivate: [StatutConnecteService]},
  // route chauffeur et admin, seulement si connecté
  { path: 'chauffeur', component: ChauffeurComponent, canActivate: [StatutConnecteService, StatutChauffeurService]},
  // route administrateur, seulement si connecté
  { path: 'administrateur', component: AdministrateurComponent, canActivate: [StatutConnecteService, StatutAdminService]},
  //a supprimer  juste pour visu
  { path: 'collaborateur/reservations/creerCovoit', component: ReserverCovoiturageComponent, canActivate: [StatutConnecteService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }