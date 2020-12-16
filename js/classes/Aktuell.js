
class Aktuell {

    _aktueller_monat() {
        return new Date();
    }

    _monat_ermitteln() {
        let monat_vorhanden = false;
        for(let monat of monatssammlung._alle_monate) {
            if((monat._monat === this._aktueller_monat().getMonth()) && (monat._jahr = this._aktueller_monat().getFullYear())) {
                monat_vorhanden = true;
                return monat;
            }
        }
        if (!monat_vorhanden) {
            this._monat_hinzufuegen(this._aktueller_monat().getFullYear(), this._aktueller_monat().getMonth());
            console.log(monatssammlung._alle_monate);
            for(let monat of monatssammlung._alle_monate) {
                if((monat._monat === this._aktueller_monat().getMonth()) && (monat._jahr = this._aktueller_monat().getFullYear())) {
                  monat_vorhanden = true;
                  return monat;
        }}
      }
    }

    _monat_hinzufuegen(jahr, monat) {
        let neuer_monat = new Monatsobjekt(jahr, monat);
        neuer_monat._jahr = jahr;
        neuer_monat._monat = monat;
        kategorie.kategorien_sammeln().forEach(kat => {
            neuer_monat._kategorien.push(kat);
        });
        monatssammlung._alle_monate.push(neuer_monat);
    }

    _html_generieren() {
          let monat = this._monat_ermitteln();
          let monatsartikel = document.createElement('article');
          monatsartikel.setAttribute('id', 'aktueller_monat');
          monatsartikel.setAttribute('class', 'monatsobjekt');
          let monats_header = document.createElement('h2');
          monats_header.innerText = `${this._datum_zu_text(monat._datum)}: ${this._betrag_zu_string(monat._ausgaben)} Euro`;
          monatsartikel.insertAdjacentElement("afterbegin", monats_header);
          let kategorienliste = document.createElement('ul');
          for(let kat of monat._kategorien) {
            let listenpunkt = document.createElement('li');
            let span_kat = document.createElement('span');
            span_kat.setAttribute('class', 'nachrechts');
            span_kat.innerText = `${kat.name}:`
            listenpunkt.appendChild(span_kat);
            let span_betrag = document.createElement('span');
            span_betrag.setAttribute('class', 'nachlinks');
            span_betrag.innerText = `${this._betrag_zu_string(kat.summe)} Euro`;
            listenpunkt.appendChild(span_betrag);
            kategorienliste.appendChild(listenpunkt);
          }
          monatsartikel.appendChild(kategorienliste);
          console.log(monatsartikel);
          return monatsartikel;
    }

    anzeigen() {
    document.querySelector("#section_left").insertAdjacentElement("beforeend", this._html_generieren());
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }

    _datum_zu_text(monat) {
        return monat.toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric"
        });
    }
}
