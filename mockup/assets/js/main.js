var x = document.getElementById("mapZoom").value;
document.getElementById("demo").innerHTML = x;

terrain = document.getElementById("terrain");

function showVal(newVal){
    document.getElementById("demo").innerHTML=newVal;
    terrain.style.width = newVal + "%";
}