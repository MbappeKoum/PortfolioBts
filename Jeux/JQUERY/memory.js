var cartes = document.querySelectorAll('.carteMemory');

// function ChangerDifficulte(){

//   //Supprimera la div jeu en la réinitialisant
//   document.getElementsByClassName('memory-game').innerHTML = "";
//   var totalCoup=0;
//   document.getElementById("totalCoup").value=totalCoup;

//   if($(this).val()=='facile'){
//     var finDeJeu =5;
//     var cartesJeu = [{
//       'nom' : '0',
//       'img' : '../IMAGES/0.jpg'
//     }, {
//       'nom' : '1',
//       'img' : '../IMAGES/1.jpg'
//     }, {
//       'nom' : '2',
//       'img' : '../IMAGES/2.jpg'
//     }, {
//       'nom' : '3',
//       'img' : '../IMAGES/3.jpg'
//     }, {
//       'nom' : '4',
//       'img' : '../IMAGES/4.jpg'
//     }, {
//       'nom' : '5',
//       'img' : '../IMAGES/5.jpg'
//     }]
//   }
//   else if($(this).val()=='moyen'){
//     var finDeJeu =7;
//     var cartesJeu = [{
//       'nom' : '0',
//       'img' : '../IMAGES/0.jpg'
//     }, {
//       'nom' : '1',
//       'img' : '../IMAGES/1.jpg'
//     }, {
//       'nom' : '2',
//       'img' : '../IMAGES/2.jpg'
//     }, {
//       'nom' : '3',
//       'img' : '../IMAGES/3.jpg'
//     }, {
//       'nom' : '4',
//       'img' : '../IMAGES/4.jpg'
//     }, {
//       'nom' : '5',
//       'img' : '../IMAGES/5.jpg'
//     }, {
//       'nom' : '6',
//       'img' : '../IMAGES/6.jpg'
//     }, {
//       'nom' : '7',
//       'img' : '../IMAGES/7.jpg'
//     }]
//   }
//   else($(this).val()=='difficile')
//   {
//     var finDeJeu =9;
//     var cartesJeu = [{
//       'nom' : '0',
//       'img' : '../IMAGES/0.jpg'
//     }, {
//       'nom' : '1',
//       'img' : '../IMAGES/1.jpg'
//     }, {
//       'nom' : '2',
//       'img' : '../IMAGES/2.jpg'
//     }, {
//       'nom' : '3',
//       'img' : '../IMAGES/3.jpg'
//     }, {
//       'nom' : '4',
//       'img' : '../IMAGES/4.jpg'
//     }, {
//       'nom' : '5',
//       'img' : '../IMAGES/5.jpg'
//     }, {
//       'nom' : '6',
//       'img' : '../IMAGES/6.jpg'
//     }, {
//       'nom' : '7',
//       'img' : '../IMAGES/7.jpg'
//     }, {
//       'nom' : '8',
//       'img' : '../IMAGES/8.jpg'
//     }, {
//       'nom' : '9',
//       'img' : '../IMAGES/9.jpg'
//     }]
// }

var carteRetourner = false;
var bloquer = false;
var premiereCarte, deuxiemeCarte;


function retournerCarte() 
{
  this.classList.add('retourner');
  if (!carteRetourner) 
    {
      carteRetourner = true;
      premiereCarte = this;
      return;
    }

  //verifier si la deuxieme carte
  //est identique a la premiere
  deuxiemeCarte = this;
  verification();
}

function verification() 
{
  //pour qu'elles soient identiques il faut : 
  var carteIdentique = premiereCarte.dataset.framework == deuxiemeCarte.dataset.framework;
  //Si carteIdentique vaut true, on devra annuler les cartes sinon on les retourne en face cacher
  carteIdentique ? annulerCarte() : unflipCards();

}

function annulerCarte() 
{
 
  premiereCarte.removeEventListener('click', retournerCarte);
  deuxiemeCarte.removeEventListener('click', retournerCarte);
 




  reinitialiser();
}

//si c'est pas les meme 
function unflipCards() 
{
  bloquer = true;

  setTimeout(() => 
  {
    premiereCarte.classList.remove('retourner');
    deuxiemeCarte.classList.remove('retourner');

    reinitialiser();
  }, 700);
}

function reinitialiser() 
{
  [carteRetourner, bloquer] = [false, false];
  [premiereCarte, deuxiemeCarte] = [null, null];
}

//pour melanger les cartes 
(function melanger() {
  cartes.forEach(card => 
  {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cartes.forEach(card => card.addEventListener('click', retournerCarte));
 
var totalCoup=0;
document.getElementsByClassName("memory-game").innerHTML="";
document.getElementById("totalCoup").value=totalCoup;

totalCoup=totalCoup++;
document.getElementById("totalCoup").value=totalCoup;