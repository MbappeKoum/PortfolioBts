<?php
/** 
 * Script de contr�le et d'affichage du cas d'utilisation "Ajouter"
 * @package default
 * @todo  RAS
 */
 
// Initialise les ressources n�cessaires au fonctionnement de l'application

  $repVues = './vues/';
  require("./include/_bdGestionDonnees.lib.php");
  require("./include/_gestionSession.lib.php");
  require("./include/_utilitairesEtGestionErreurs.lib.php");
  // d�marrage ou reprise de la session
  initSession();
  // initialement, aucune erreur ...
  $tabErreurs = array();
    

// DEBUT du contr�leur ajouter.php

if (count($_POST)==0)
{
  $etape = 1;
}
else
{
  $etape = 2;
  $unType=$_POST["type"];
  $unPrix=$_POST["prix"];
  $uneTaille=$_POST["taille"];
  $uneCouleur=$_POST["couleur"];
  $unModel=$_POST["model"];
  $unPoids=$_POST["poids"];


  AjouterMateriel($unType, $unPrix, $uneTaille, $uneCouleur, $unModel, $unPoids, $tabErreurs);

}

// D�but de l'affichage (les vues)

include($repVues."entete.php");
include($repVues."menu.php");
include($repVues."erreur.php");
include($repVues."vAjouterMateriel.php");
include($repVues."pied.php");
?>
  
