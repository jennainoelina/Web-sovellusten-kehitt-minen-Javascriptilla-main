// TEHTÄVÄ 1 + 3
function lahetys(event) {

    event.preventDefault();

    const nimi = document.querySelector('input[name="nimi"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const kommentti = document.querySelector('textarea[name="kommentti"]').value;

    if (nimi === "") {
        alert("Nimi ei saa olla tyhjä!");
        return;
    }
    if (email.length < 6 || email.length >30|| !email.includes("@")) {
        alert("Osoitteen tulee olla 6-30 merkkiä pitkä ja sisältää @");
        return;
    }
    if (kommentti === "") {
        alert("Kommenttikenttä ei saa olla tyhjä!");
        return;
    }
    if (kommentti.length > 150) {
        alert("Kommentin maksimipituus on 150 merkkiä!");
        return;
    }

    const tiedot = {
        nimi: nimi,
        email: email,
        kommentti: kommentti
    };

    localStorage.setItem("lomakeData", JSON.stringify(tiedot));

    alert(`Nimi: ${nimi}\nSähköposti: ${email}\nKommentti: ${kommentti}`);
    alert("Tiedot tallennettu local Storageen!");
}

//TEHTÄVÄ 2
function kustannukset(event) {

    event.preventDefault();

    const tyyppi = document.getElementById("type").value;
    const vuodet = document.getElementById("years").value;
    const cost = document.getElementById("cost");

    let hinta = tyyppi * vuodet;

    if (vuodet > 2) {
        hinta = hinta * 0.8;
        alert("Yli 2 vuoden jäsyydestä saat 20% alennusta!");
    }

    if (vuodet >= 5) {
        hinta = hinta - 5;
        alert("Tilaamalla vähintään 5 vuodeksi saat lisäksi 5 euron alennuksen!");
    }

    cost.value = hinta + " €";
}

document.getElementById("theForm").onsubmit = kustannukset;

//TEHTÄVÄ 4
window.addEventListener("load", function() {
    const data = localStorage.getItem("lomakeData");
    const tiedotObjekti = JSON.parse(data);
    const div = document.getElementById("sessiondata");

    div.innerHTML = "<p><strong>Nimi:</strong> " + tiedotObjekti.nimi + "</p>" +
                    "<p><strong>Email:</strong> " + tiedotObjekti.email + "</p>" +
                    "<p><strong>Kommentti:</strong> " + tiedotObjekti.kommentti + "</p>";
});