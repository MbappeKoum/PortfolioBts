<?php
/** 
 * Script de contr�le et d'affichage du cas d'utilisation "Ajouter"
 * @package default
 * @todo  RAS
 */
 
$repInclude = './include/';
$repVues = './vues/';

require($repInclude . "_init.inc.php");
  
$ref=lireDonneePost("ref", "");
if (count($_POST)==0)
{
  $etape = 1;
}
else
{
  $etape = 2;
  supprimer($ref, $tabErreurs);
  if (nbErreurs($tabErreurs)==0)
  {
    $reussite = 1;
    $messageActionOk = "Le visiteur a bien été supprimer";
  }

}

// Construction de la page Rechercher
// pour l'affichage (appel des vues)
include($repVues."entete.php") ;
include($repVues."menu.php") ;
include($repVues ."erreur.php");
if ($etape==1)
{
  include($repVues."vSupprimerClient.php"); ;
}

include($repVues."pied.php") ;
?>
  
