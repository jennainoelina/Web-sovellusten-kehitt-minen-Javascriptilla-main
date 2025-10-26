// HARJOITUS 1
var jsonteksti = '{ "tyontekijat" : [' +
			'{ "etunimi":"John" , "sukunimi":"Doe", "ika":30, "kaupunki":"New York" },' +
			'{ "etunimi":"Anna" , "sukunimi":"Smith", "ika":25, "kaupunki":"London" },' +
			'{ "etunimi":"Peter" , "sukunimi":"Jones", "ika":40, "kaupunki":"Paris" } ]}';

var listadata = JSON.parse(jsonteksti);

const nappulanimet = document.getElementById("nimet");
const nappulatiedot = document.getElementById("tiedot");
const tulostusalue = document.getElementById("jsondata");

// NAPPULA NIMET
nappulanimet.addEventListener("click", function() {
    let tulostus = "";

    for (let indeksi = 0; indeksi < listadata.tyontekijat.length; indeksi++) {
        let tyontekija = listadata.tyontekijat[indeksi];

        tulostus += tyontekija.etunimi + " " + tyontekija.sukunimi + "<br>";
    }

    tulostusalue.innerHTML = tulostus;
});

// NAPPULA KAIKKI TIEDOT
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

// HARJOITUS 2
const raakanappula = document.getElementById("lataaraaka");
const parsittunappula = document.getElementById("lataaparsi");
const raakatulostus = document.getElementById("rawdata");

// RAAKANAPPULA
raakanappula.addEventListener("click", function(){
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")

    .then(function(vastaus) {
        return vastaus.text();
    })
    .then(function(data) {
        raakatulostus.textContent = data;
    })
    .catch(function(virhe) {
        raakatulostus.innerHTML = "Virhe datan latauksessa: " + virhe;
    })
});

// PARSITTU NAPPULA
parsittunappula.addEventListener("click", function() {

    raakatulostus.innerHTML = "Ladataan ja parsitaan dataa...";

    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")

        .then(function(vastaus) {
            return vastaus.json();
        })
        .then(function(data) {
            console.log(data);
            
            let taulukko =
                "<table border='1' cellpadding='6'><tr><th>Elokuvan nimi</th><th>Vuosi</th><th>Kuva</th></tr>";

            for (let indeksi = 0; indeksi < data.Search.length; indeksi++) {
                let elokuva = data.Search[indeksi];

                taulukko += "<tr>";
                taulukko += "<td>" + elokuva.Title + "</td>";
                taulukko += "<td>" + elokuva.Year + "</td>";
                taulukko += "<td><img src='" + elokuva.Poster + "' alt='Kuva puuttuu' height='120'></td>";
                taulukko += "</tr>";
            }

            taulukko += "</table>";

            raakatulostus.innerHTML = taulukko;
        })
        .catch(function(virhe) {
            raakatulostus.innerHTML = "Virhe datan latauksessa: " + virhe;
        });
});