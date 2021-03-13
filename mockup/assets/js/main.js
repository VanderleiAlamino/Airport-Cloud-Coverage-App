var x = document.getElementById("mapZoom").value;
document.getElementById("demo").innerHTML = x;

terrain = document.getElementById("terrain");
grid = document.createElement("div");
grid.setAttribute("class", "grid");
aside = document.getElementById("aside");

display = false;


function showVal(newVal){
    document.getElementById("demo").innerHTML=newVal;
    terrain.style.width = newVal + "%";
}

function activeInterface(e){
    if(e.checked == true){
        terrain.classList.add("ui");
    }else{
        terrain.classList.remove("ui");
    }
}

function activeGrids(e){
    if(e.checked == true){
        terrain.classList.add("lines");
    }else{
        terrain.classList.remove("lines");
    }
}

function toggleDisplay(){
    display = !display;

    if(display){
        aside.classList.add("open-filter");
    }else{
        aside.classList.remove("open-filter");
    }
}

