// TEHTÄVÄ 1 //

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

// TEHTÄVÄ 2 //

function valintaAlert() {
    const valinta = document.getElementById("mySelect").value;
    alert("Valitsit: " + valinta);

    const carImages = {
        BMW: "images/bemmikuva.png",
        Audi: "images/audikuva.png",
        Mercedes: "images/mersukuva.png",
        Volvo: "images/volvokuva.png.png"
    };

    document.getElementById("carimage").src = carImages[valinta];
}

const reunat = document.getElementById("carimage");

reunat.addEventListener("mouseover", () => {
  reunat.style.border = "5px solid red";
});

reunat.addEventListener("mouseout", () => {
  reunat.style.border = "none";
});

// TEHTÄVÄ 3 //

document.getElementById("Insert").onclick = function() {
  const nimi = document.getElementById("nimi").value.trim();
  const tehtava = document.getElementById("tehtava").value.trim();
  const palkka = document.getElementById("palkka").value.trim();

  let virheet = "";

  if (nimi.length <= 5) {
    virheet += "Nimen tulee olla yli 5 merkkiä pitkä.\n";
  }
  if (tehtava === "") {
    virheet += "Tehtäväkenttä ei saa olla tyhjä.\n";
  }
  if (isNaN(palkka) || Number(palkka) <= 0) {
    virheet += "Palkan tulee olla numero ja suurempi kuin 0.\n";
  }

  if (virheet) {
    alert(virheet);
  } else {
    const table = document.getElementById("data").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.textContent = nimi;
    cell2.textContent = tehtava;
    cell3.textContent = palkka;
  }
    document.getElementById("nimi").value = "";
    document.getElementById("tehtava").value = "";
    document.getElementById("palkka").value = "";
}