function showTable() {
    const tableHtml = `
        <table border="1">
            <thead>
                <tr>
                    <th>Nimi</th>
                    <th>Tehtävä</th>
                    <th>Palkka</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                </tr>
            </tbody>
        </table>
    `;

    document.querySelector('#taulukonPaikka').innerHTML = tableHtml;
}

const otsikko1 = document.querySelector("#exercise1");

otsikko1.addEventListener("click", function() {
    otsikko1.style.color = "red";
    otsikko1.innerHTML = "Bye bye mouse!";
});

const tekstialue = document.getElementById("textdata");
const charcount = document.getElementById("charcount");

tekstialue.addEventListener("focus", () => {
    charcount.innerHTML = "Please fill in the form with proper data.<br>";
    tekstialue.style.backgroundColor = "lightgreen";
})

tekstialue.addEventListener("keydown", () => {
    const pituus = tekstialue.value.length + 1;
    charcount.innerHTML = "Please fill in the form with proper data. <br> Merkkejä: " + pituus;
});

const lomake = document.querySelector("form");

lomake.addEventListener("submit", (e) => {
    e.preventDefault();

    const arvo = document.getElementById("textdata").value;

    if (arvo === "") {
        alert("Kenttä ei voi olla tyhjä!");
    } else {
        alert("Lomake lähetetty onnistuneesti!");
    }
});

const koordinaatit = document.getElementById("coordinates");

koordinaatit.addEventListener("mousemove", (e) => {
    console.log("X:", e.offsetX, "Y:", e.offsetY);
    document.getElementById("coords").innerHTML =
    `X: ${e.offsetX}, Y: ${e.offsetY}`;
});

