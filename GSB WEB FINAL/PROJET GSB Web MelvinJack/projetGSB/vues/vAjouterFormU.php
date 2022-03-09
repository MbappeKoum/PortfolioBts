
<!--Vue pour la saisie des informations dans un formulaire!-->

<div class="container">

<form name="formAjout" action="" method="post">
  <fieldset>
    <legend>Entrez les donn�es sur l'utilisateur � ajouter </legend>
    <label> Id : </label> <input type="text" placeholder="Entrer l'id" name="id" size="10" /><br />
    <label>Nom :</label> <input type="text" name="nom" size="20" /><br />
    <label>Mot de passe :</label> <input type="text" name="mdp" size="20" /><br />
    <label> Type utilisateur : </label>
    <select name="cat">
       <option selected  value = "client">client</option>
       <option value = "admin">admin</option>
    </select> 
  </fieldset>
  <button type="submit" class="btn btn-primary">Enregistrer</button>
  <button type="reset" class="btn">Annuler</button>
  <p />
</form>
</div>


