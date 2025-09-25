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

    const carImages = {
        BMW: "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png",
        Audi: "https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_Audi_A4_Sport_2.0_Front.jpg",
        Mercedes: "https://upload.wikimedia.org/wikipedia/commons/9/9a/2021_Mercedes-Benz_E_220_d_AMG_Line_Premium_Automatic_2.0_Front.jpg",
        Volvo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/2018_Volvo_S90_Inscription_T5_Automatic_2.0_Front.jpg"
    };

    document.getElementById("carimages").src = carImages[valinta];
}
