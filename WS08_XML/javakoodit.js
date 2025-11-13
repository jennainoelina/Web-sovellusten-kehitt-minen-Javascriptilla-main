// HAE DATA NAPPULA
const saanappula = document.getElementById("haesaa");
const tulostus = document.getElementById("weatherdata");

saanappula.addEventListener("click", function() {
    tulostus.innerHTML = "Ladataan säätietoja...";

    const osoite = "http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2";

    fetch(osoite)
        .then(function(vastaus) {
            return vastaus.json();
        })
        .then(function(data) {
            console.log(data);

            const lampotila = data.main.temp;
            const kosteus = data.main.humidity;
            const pilvisyys = data.clouds.all;
            const kaupunki = data.name;

            let taulukko = `
                <h3>Sää kohteessa ${kaupunki}</h3>
                <table border="1" cellpadding="6">
                    <tr><th>Ilmiö</th><th>Arvo</th></tr>
                    <tr><td>Lämpötila</td><td>${lampotila} °C</td></tr>
                    <tr><td>Ilmankosteus</td><td>${kosteus} %</td></tr>
                    <tr><td>Pilvisyys</td><td>${pilvisyys} %</td></tr>
                </table>
            `;

            tulostus.innerHTML = taulukko;
        })
        .catch(function(virhe) {
            tulostus.innerHTML = "Virhe datan latauksessa: " + virhe;
        });
});

// PUDOTUSVALIKKO
const valinta = document.getElementById("city");
const tulostus2 = document.getElementById("weatherdata");

valinta.addEventListener("change", function() {
    const valittukaupunki = valinta.value;
    haesaa(valittukaupunki);
});

function haesaa(kaupunki) {
    tulostus2.innerHTML = "Haetaan säätietoja... ";

    const APIosoite = `http://api.openweathermap.org/data/2.5/weather?q=${kaupunki}&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2`;

    fetch(APIosoite)
        .then(vastaus => vastaus.json())
        .then(data => {
            const lampotila = data.main.temp;
            const kosteus = data.main.humidity;
            const pilvisyys = data.clouds.all;

            let tulos = `
                <h3>Sää kohteessa ${kaupunki}</h3>
                <table border="1" cellpadding="6">
                    <tr><th>Ilmiö</th><th>Arvo</th></tr>
                    <tr><td>Lämpötila</td><td>${lampotila} °C</td></tr>
                    <tr><td>Ilmankosteus</td><td>${kosteus} %</td></tr>
                    <tr><td>Pilvisyys</td><td>${pilvisyys} %</td></tr>
                </table>
            `;

            tulostus2.innerHTML = tulos;
        })
        .catch(virhe => {
            tulostus2.innerHTML = "Virhe säätietojen haussa: " + virhe;
        });
};

// HAKU
const hakunappula = document.getElementById("search");
const hakukentta = document.getElementById("citysearch");

hakunappula.addEventListener("click", function() {
    const kaupunki = hakukentta.value.trim();

    if (kaupunki === "") {
        alert("Kirjoita kaupungin nimi!");
        return;
    }
    haesaa(kaupunki);
});