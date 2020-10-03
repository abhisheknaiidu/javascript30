var scores=[0,0];
var roundScores=0;
var activePlayer=0;


document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0'
document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'
document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'

document.querySelector('.btn-roll').addEventListener('click',()=>
{
   var  dice=Math.floor(Math.random()*6) + 1;
   var diceDM=document.querySelector('.dice')
   diceDM.style.display='block'
   diceDM.src='dice-'+dice+'.png'

   if(dice>1)
   {
    roundScores+=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScores;
    document.querySelector('.player-' +activePlayer + '-panel').classList.add('.winner')
    document.querySelector('.player-' +activePlayer + '-panel').classList.remove('.winner')
   }
   else
   {
     activePlayer===0?activePlayer=1:activePlayer=0;
     roundScores=0

     document.getElementById('current-0').textContent='0'
     document.getElementById('current-1').textContent='0'

     document.querySelector('.player-0-panel').classList.toggle('active')
     document.querySelector('.player-1-panel').classList.toggle('active')

     document.querySelector('.dice').style.display='none'
    }


    document.querySelector('.btn-hold').addEventListener('click',function()
    {
        scores[activePlayer]+=roundScores;

        document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer]
        NextPlayer()
        if(scores[activePlayer]>=20)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display='none'
        }
        else
        {
            NextPlayer()
        }
    })
})

function NextPlayer()
{
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScores=0

    document.getElementById('current-0').textContent='0'
    document.getElementById('current-1').textContent='0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display='none'
}