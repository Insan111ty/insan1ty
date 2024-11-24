function switchVisible() {
    if (document.getElementById("abouter").innerHTML.includes('About me')) {
        document.getElementById("Div1").style.opacity  = 0;
        document.getElementById("Div2").style.opacity  = 1;
        document.getElementById("footer").style.opacity  = 0;
        document.getElementById("Div1").style.pointerEvents = "none";
        document.getElementById("Div2").style.pointerEvents = "all";
        document.getElementById("footer").style.pointerEvents = "none";
        document.getElementById("Div1").style.userSelect = "none";
        document.getElementById("Div2").style.userSelect = "auto";
        document.getElementById("footer").style.userSelect = "none";
        document.getElementById("abouter").textContent="< Return";
        document.querySelector(".topography").style.opacity = 0.17;
    } else {

        document.getElementById("Div1").style.opacity  = 1;
        document.getElementById("Div2").style.opacity  = 0;
        document.getElementById("footer").style.opacity  = 1;
        document.getElementById("Div1").style.pointerEvents = "all";
        document.getElementById("Div2").style.pointerEvents = "none";
        document.getElementById("footer").style.pointerEvents = "all";
        document.getElementById("Div1").style.userSelect = "all";
        document.getElementById("Div2").style.userSelect = "none";
        document.getElementById("footer").style.userSelect = "auto";
        document.getElementById("abouter").textContent="About me";
        document.querySelector(".topography").style.opacity = 0.3
    }


}
