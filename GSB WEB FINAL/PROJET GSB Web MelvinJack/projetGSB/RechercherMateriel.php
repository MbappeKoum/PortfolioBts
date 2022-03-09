<?php
/** 
 * Script de contr�le et d'affichage du cas d'utilisation "Ajouter"
 * @package default
 * @todo  RAS
 */
  $repVues = './vues/';
  require("./include/_bdGestionDonnees.lib.php");
  require("./include/_gestionSession.lib.php");
  require("./include/_utilitairesEtGestionErreurs.lib.php");
  // d�marrage ou reprise de la session
  initSession();
  // initialement, aucune erreur ...
  $tabErreurs = array();
    

 

if (count($_POST)==0)
{
  $etape = 1;
}
else
{
  $etape = 2;
  $unType=$_POST["type"];
  
  $materiel=rechercherMateriel($unType);
  if (count($materiel) == 0)
  {
    $message = "Aucun Matériel n'a été trouvée !";
    ajouterErreur($tabErreurs, $message);
  }
}

// Construction de la page Rechercher
// pour l'affichage (appel des vues)
include($repVues."entete.php") ;
include($repVues."menu.php") ;
include($repVues ."erreur.php");
if ($etape==1)
{
  include($repVues."vRechercherMateriel.php"); ;
}
else
{
  include($repVues."vListerM.php") ;
}
include($repVues."pied.php") ;
?>
  

