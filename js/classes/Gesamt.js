
class Gesamt {

    _kategorien_erzeugen() {
        if (haushaltsbuch._kategorien.length === 0) {
            kategorie.kategorien_sammeln().forEach(kat => {
            haushaltsbuch._kategorien.push(kat);
        })};
    }

    _html_generieren() {
          let monatsartikel = document.createElement('article');
          monatsartikel.setAttribute('id', 'gesamt');
          monatsartikel.setAttribute('class', 'monatsobjekt');
          let monats_header = document.createElement('h2');
          monats_header.innerText = `Gesamt: ${this._betrag_zu_string(haushaltsbuch.gesamtbilanz)} Euro pro Monat`;
          monatsartikel.insertAdjacentElement("afterbegin", monats_header);
          let kategorienliste = document.createElement('ul');
          for(let kat of haushaltsbuch._kategorien) {
            let listenpunkt = document.createElement('li');
            let span_kat = document.createElement('span');
            span_kat.setAttribute('class', 'nachrechts');
            span_kat.innerText = `${kat.name}:`
            listenpunkt.appendChild(span_kat);
            let span_betrag = document.createElement('span');
            span_betrag.setAttribute('class', 'nachlinks')
            span_betrag.innerText = `${this._betrag_zu_string(kat.summe)} Euro pro Monat`;
            listenpunkt.appendChild(span_betrag);
            kategorienliste.appendChild(listenpunkt);
          }
          monatsartikel.appendChild(kategorienliste);
          return monatsartikel;
    }

    anzeigen() {
        if(document.querySelector('#gesamt')) {
            document.querySelector('#gesamt').remove()
        }
        this._kategorien_erzeugen();
        document.querySelector('#eingabebereich').insertAdjacentElement("afterend", this._html_generieren());
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
