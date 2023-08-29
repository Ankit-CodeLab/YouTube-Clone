var counter = 0;
function countClicks()
{
counter = counter + 1;
document.getElementById("num_of_clicks").innerHTML = counter + " views &bull; 2 minutes";
}