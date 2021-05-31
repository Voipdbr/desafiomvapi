/*esse js tem como função chamar e aplicar os estilos já definidos nos styles.css,
aplicando uma novas listas de classes dentro dos códigos div, ul, e etc no html.*/
function search() {
    let swt = document.querySelector(".fm-mas");
    swt.classList.toggle("open")
    let sw = document.querySelector(".sea");
    sw.classList.toggle("close")
    let sw1 = document.querySelector(".btn");
    sw1.classList.toggle("close")
    let sw2 = document.querySelector(".txt");
    sw2.classList.toggle("close")
}

function comics() {
    let swt2 = document.querySelector(".container");
    swt2.classList.toggle("close")
    let swt3 = document.querySelector(".container2");
    swt3.classList.toggle("op")
    let swt4 = document.querySelector(".container3");
    swt4.classList.toggle("clo")
    let swta = document.querySelector(".container4");
    swta.classList.toggle("close")
}

function creators() {
    let swt7 = document.querySelector(".container");
    swt7.classList.toggle("close")
    let swt5 = document.querySelector(".container2");
    swt5.classList.toggle("cl")
    let swt6 = document.querySelector(".container3");
    swt6.classList.toggle("opd")
    let swta = document.querySelector(".container4");
    swta.classList.toggle("close")
}