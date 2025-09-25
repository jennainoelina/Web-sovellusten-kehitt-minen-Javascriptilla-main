function changeHeading() {
    const otsikko = document.querySelector("title").innerHTML="Muokattu otsikko!";
}

function secondButton() {
    const tyylit = document.getElementById("tehtava2");
    tyylit.style.color = "red";
    tyylit.style.backgroundColor = "blue";
    tyylit.style.fontSize = "32px";
    tyylit.style.fontStyle = "italic";
}

function loremipsum() {
    const vaihdateksti = document.getElementById("teksti");
    vaihdateksti.innerHTML = '<strong><em>"Uusi muotoiltu teksti!"</em><br><br></strong>';
}

function valintaAlert() {
    const valinta = document.getElementById("mySelect").value;
    alert("Valitsit: " + valinta);
}

