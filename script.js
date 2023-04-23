let izracunaj = document.getElementById("izracunaj");
izracunaj.addEventListener("click", () => {
  izracunaj.disabled = true;

  let ruza = document.getElementById("ruze");
  if (ruza.value < 0) {
    alert("Broj ruza mora biti jednak ili veci od 1!");
    ruza.value = 0;
  }
  let ruza_cena = Math.floor(ruza.value) * 150;

  let ljiljan = document.getElementById("ljiljani");
  if (ljiljan.value < 0) {
    alert("Broj ljiljana mora biti jednak ili veci od 1!");
    ljiljan.value = 0;
  }
  let ljiljan_cena = Math.floor(ljiljan.value) * 120;

  let gerber = document.getElementById("gerberi");
  if (gerber.value < 0) {
    alert("Broj gerbera mora biti jednak ili veci od 1!");
    gerber.value = 0;
  }
  let gerber_cena = Math.floor(gerber.value) * 70;

  let bombonjera = document.getElementById("bombonjera");
  let bombonjera_cena = 0;
  if (bombonjera.checked) {
    bombonjera_cena = 500;
  }

  let cokolada = document.getElementById("cokolada");
  let cokolada_cena = 0;
  if (cokolada.checked) {
    cokolada_cena = 500;
  }

  let sapmanjac = document.getElementById("sampanjac");
  let sampanjac_cena = 0;
  if (sapmanjac.checked) {
    sampanjac_cena = 500;
  }

  let red1 = document.createElement("p");
  red1.classList.add("pozadina");
  if (ruza.value >= 1) {
    for (let i = 0; i < Math.floor(ruza.value); i++) {
      let span = document.createElement("span");
      span.innerHTML = "<img src = 'slike/rose.jpg'>";
      red1.append(span);
      document.body.append(red1);
    }
  }

  let red2 = document.createElement("p");
  red2.classList.add("pozadina");
  if (ljiljan.value >= 1) {
    for (let i = 0; i < Math.floor(ljiljan.value); i++) {
      let span = document.createElement("span");
      span.innerHTML = "<img src = 'slike/lily.jpg'>";
      red2.append(span);
      document.body.append(red2);
    }
  }
  let red3 = document.createElement("p");
  red3.classList.add("pozadina");
  if (gerber.value >= 1) {
    for (let i = 0; i < Math.floor(gerber.value); i++) {
      let span = document.createElement("span");
      span.innerHTML = "<img src = 'slike/gerber.jpg'>";
      red3.append(span);
      document.body.append(red3);
    }
  }

  let red4 = document.createElement("p");
  red4.classList.add("pozadina");
  if (bombonjera.checked) {
    red4.innerHTML = `+Bombonjera`;
    document.body.append(red4);
  }

  let red5 = document.createElement("p");
  red5.classList.add("pozadina");
  if (cokolada.checked) {
    red5.innerHTML = `+ Čokolada`;
    document.body.append(red5);
  }

  let red6 = document.createElement("p");
  red6.classList.add("pozadina");
  if (sapmanjac.checked) {
    red6.innerHTML = `+ Šampanjac`;
    document.body.append(red6);
  }

  let racun =
    ruza_cena +
    ljiljan_cena +
    gerber_cena +
    bombonjera_cena +
    cokolada_cena +
    sampanjac_cena;

  let kartica = document.getElementById("kartica");

  if (kartica.checked && racun > 2000) {
    let ukupan = document.createElement("p");
    ukupan.innerHTML = `Cena bez popusta je: ${racun}`;
    ukupan.classList.add("pozadina");
    document.body.append(ukupan);
    let ispis = document.createElement("h2");
    ispis.classList.add("pozadina");
    ispis.innerHTML = `Cena sa popustom je: ${racun - (racun * 10) / 100}`;
    document.body.append(ispis);
  } else {
    let ispis1 = document.createElement("h2");
    ispis1.classList.add("pozadina");
    ispis1.innerHTML = `Ukupna cena je: ${racun}`;
    document.body.append(ispis1);
  }
  ukupan.scrollIntoView();
});

let reset = document.getElementById("resetuj");
reset.addEventListener("click", () => {
  location.reload();
});

function pozdrav() {
  let vreme = new Date();
  let sat = vreme.getHours();
  let naslov = document.createElement("h1");
  naslov.classList.add("pozdrav");
  if (sat >= 6 && sat < 12) {
    naslov.textContent = "Dobro jutro! Dobro nam došli";
    document.body.prepend(naslov);
  } else if (sat >= 12 && sat < 18) {
    naslov.textContent = "Dobar dan! Dobro nam došli";
    document.body.prepend(naslov);
  } else {
    naslov.textContent = "Dobro vece! Dobro nam došli";
    document.body.prepend(naslov);
  }
}
pozdrav();
