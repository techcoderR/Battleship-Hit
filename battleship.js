var location1=Math.floor(Math.random() * 10);
var location2=location1+1;
var location3=location2+1;
var guess;
var hit=0;
var guesses=0;
var issunk=false;

while(issunk==false)
{
    guess=prompt("Ready to fire Enter the single digit to 💥 the Ship🛳 " );

         guesses=guesses+1;
         if (guess == location1 || guess == location2 || guess == location3) {
            hit = hit + 1;
            if (hit == 3) {
                issunk = true;
                alert("You sank my battleship!");
                }
         
             }
         else {
                alert("MISS");
            }
          }
    

var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);

document.write(stats);


