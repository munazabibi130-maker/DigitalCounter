let count=0;
function update()
{
    document.getElementById("count").innerHTML=count;
}
function decreasecount()
{
    count--;
    update();
}
function increasecount()
{
    count++;
    update();
}
function resetcount()
{
    count=0;
    update();
}
function savecount()
{
localStorage.setItem("count", count);
}
function loadcount()
{
 let savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
        count = Number(savedCount);
        update();
    }
}