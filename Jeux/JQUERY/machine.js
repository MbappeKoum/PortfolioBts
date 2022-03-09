var mise = parseInt($('#Mise').val());
var cagnotte = parseInt($('#Cagnotte').val());

function LancementRoulette()
{
    var Mise = parseInt($('#Mise').val());
    var Cagnotte = parseInt($('#Cagnotte').val());

    if( $('#Cagnotte').val() === "0" )
    {
        alert("Votre cagnotte est vide quel dommage :( ");
    }

    else if( $('#Mise').val() === "" || Mise > Cagnotte || Mise < 1)
    {
        alert("Vous devez miser s'il vous plait :) ");
    }
    else
    {
        $('#Laroulette ul').playSpin({
            onFinish : function(){
                Calculer();
            }
        });
    }
}

function Calculer()
{

    if(($('#imgDroite').css('top')) == ($('#imgmilieu').css('top')) && ($('#imgmilieu').css('top')) == ($('#imgGauche').css('top')))
    {
        alert("Vous remportez un voyage à Dijon")

        $('#Cagnotte').val(parseInt($('#Cagnotte').val()) + parseInt(($('#miseUtilisateur').val()))*5);
    }
    else if(($('#imgDroite').css('top')) == ($('#imgmilieu').css('top')) || ($('#imgmilieu').css('top')) == ($('#imgGauche').css('top')) || ($('#imgDroite').css('top')) == ($('#imgGauche').css('top')))
    {
        alert("Vous remportez un repas offert dans un restaurant");
        
        $('#Cagnotte').val(parseInt($('#Cagnotte').val()) + parseInt(($('#Mise').val()))*2);
    }
    else
    {
        alert("Perdu retourner vous renseignez auprès de monsieur Buffeteau !");
        
        $('#Cagnotte').val(parseInt($('#Cagnotte').val()) - parseInt(($('#Mise').val())));
    }
    if( $('#Cagnotte').val() === "0" )
    {
        alert("Votre compte est vide ;) ");
    }
}