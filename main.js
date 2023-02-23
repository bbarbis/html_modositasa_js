window.addEventListener("load", init);

function init(){
    document.getElementById("tartalom").innerHTML = "<p>JavaScriptből írok ide.</p>";
    kedvencszavak();
}
function kedvencszavak(){
    const szavak = ["pizza", "csoki", "eper"]; 
    document.getElementById("tartalom").innerHTML = (`<ul>`);
    for (let index = 0; index < szavak.length; index++) {

     document.getElementById("tartalom").innerHTML += (`<li> ${szavak[index]} </li>`);
    }
    
}