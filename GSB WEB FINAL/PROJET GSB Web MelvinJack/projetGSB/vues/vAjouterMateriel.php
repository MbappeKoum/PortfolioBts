<!--Vue pour la saisie des informations dans un formulaire!-->

<div class="container">

<form name="formAjout" action="" method="post">
  <fieldset>
    <legend>Entrez les données sur le matériel  ajouter </legend>
    <label>Model: </label> <input type="text" placeholder="Entrer le model" name="model" size="10" /><br />
    <label>Type</label> <input type="text" name="type" size="20" /><br />
    <label>Prix :</label> <input type="text" name="prix" size="20" /><br />
    <label>Couleur</label> <input type="text" name="couleur" size="20" /><br />
    <label>Poids :</label> <input type="text" name="poids" size="20" /><br />
    <label>Taille</label> <input type="text" name="taille" size="20" /><br />
  </fieldset>
  <button type="submit" class="btn btn-primary">Enregistrer</button>
  <button type="reset" class="btn">Annuler</button>
  <p>
</form>
</div>
