function Dessus()
{
    $('td').css('background-color','transparent');
    $(this).css('background-color','white').css('cursor','pointer');
}
function Clicker()
{
    $(this).css('border-color','red');
}

var nbClick1=0;
var nbClickMax1=8;
function compter1()
{
    nbClick1++;
    if(nbClick1>=nbClickMax1)
        {
            document.getElementById('tableau1').disabled=true;
            alert('Vous avez sélectionner le maximum de chiffres');
        }
}

var nbClick2=0;
var nbClickMax2=1;
function compter2()
{
    nbClick2++;
    if(nbClick2>=nbClickMax2)
        {
            document.getElementById('tableau2').disabled=true;
            alert('Vous avez sélectionner le maximum de chiffres');
        }
}



function LancementJeu()
{
    var Mise = parseInt($('#Mise').val());
    var Cagnotte = parseInt($('#Cagnotte').val());

    if( $('#Cagnotte').val() == "0" )
    {
        alert("Votre cagnotte est vide quel dommage :( ");
    }

    else if( $('#Mise').val() == "" || Mise < 1)
    {
        alert("Vous devez miser s'il vous plait :) ");
    }
    else if(Mise > Cagnotte)
    {
        alert('Entrez une mise inférieure ou égale a votre cagnotte');
    }
    else
    {
        $('#Grille tr').playSpin({
            onFinish : function(){
                Calculer();
            }
        });
    }
}
