var jsonteksti = '{ "tyontekijat" : [' +
			'{ "etunimi":"John" , "sukunimi":"Doe", "ika":30, "kaupunki":"New York" },' +
			'{ "etunimi":"Anna" , "sukunimi":"Smith", "ika":25, "kaupunki":"London" },' +
			'{ "etunimi":"Peter" , "sukunimi":"Jones", "ika":40, "kaupunki":"Paris" } ]}';

var listadata = JSON.parse(jsonteksti);

const nappulanimet = document.getElementById("nimet");
const nappulatiedot = document.getElementById("tiedot");
const tulostusalue = document.getElementById("jsondata");

nappulanimet.addEventListener("click", function() {
    let tulostus = "";

    for (let indeksi = 0; indeksi < listadata.tyontekijat.length; indeksi++) {
        let tyontekija = listadata.tyontekijat[indeksi];

        tulostus += tyontekija.etunimi + " " + tyontekija.sukunimi + "<br>";
    }

    tulostusalue.innerHTML = tulostus;
});

nappulatiedot.addEventListener("click", function() {
    let tulostus = "";

    for (let indeksi = 0; indeksi < listadata.tyontekijat.length; indeksi++) {
    let tyontekija = listadata.tyontekijat[indeksi];

    tulostus +=
        "Etunimi: " + tyontekija.etunimi + "<br>" +
        "Sukunimi: " + tyontekija.sukunimi + "<br>" +
        "Ikä: " + tyontekija.ika + "<br>" +
        "Kaupunki: " + tyontekija.kaupunki + "<br><br>";
    }
    tulostusalue.innerHTML = tulostus;
});