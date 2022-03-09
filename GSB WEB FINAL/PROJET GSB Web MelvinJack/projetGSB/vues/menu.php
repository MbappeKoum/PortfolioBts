
<?php
$est=!estConnecte();
?>
  <!-- Navbar
    ================================================== -->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <ul class="nav">
              <li>
                <a href="./index.php">Accueil</a>
              </li>
              <li class="nav">
                <a href="lister.php">Lister</a>
              </li>
              <li class="nav">
                <a href="rechercher.php">Rechercher</a>
              </li>
              <li class="nav">
                <a href="supprimer.php">Supprimer</a>
              </li>
              <li class="nav">
                <a href="modifier.php">Modifier</a>
              </li>
              <li class="nav">
                <a href="SupprimerMateriel.php">Supprimer matériel</a>
              </li>
              <li class="nav">
                <a href="AjouterMateriel.php">Ajouter matériel</a>
              </li>
              <li class="nav">
                <a href="RechercherMateriel.php">Rechercher matériel</a>
              </li>
              <li class="nav">
                <a href="listerM.php">Lister matériel</a>
              </li>
              <li class="nav">
                <a href="modifierM.php">Modifier matériel</a>
              </li>
              <li class="nav">
                <a href="Emprunter.php">Emprunter matériel</a>
              </li>
              <li class="nav">
                <a href="Restituer.php">Restituer matériel</a>
              </li>





          

                        
  <?php

// Si session administrateur
if (estVisiteurConnecte())
{

  ?>
              <li class="nav"> 
                <a href="gererPanier.php" >Panier </a>  
              </li>
              <li class="nav">
                 <a href="deconnecter.php" >Deconnecter</a> 
              </li>
 
  <?php
}

if (estAdministrateurConnecte())
{

  ?>
            <li class="nav">
                <a href="ajouterUtilisateur.php">Ajouter</a>
              </li>
              <li class="nav">
                <a href="supprimer.php">Supprimer</a>
              </li> <li class="nav">
                <a href="modifier.php">modifier</a>
              </li>
              <li class="nav">
                 <a href="deconnecter.php" >Deconnecter</a> 
              </li>
 
  <?php
}


// Si aucune connection n'est en cours, proposer l'inscription et l'identification
if (!estConnecte())
{
?>
              <li class="nav">
                <a href="inscriptionUtilisateur.php" >Inscription</a> 
              </li>
              <li class="nav">  
                <a href="connecter.php" >Se connecter</a> 
              </li>   
<?php
}   
?>                                   
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>

