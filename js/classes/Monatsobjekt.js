class Monatsobjekt {

    constructor(jahr, monat) {
        this._jahr = jahr;
        this._monat = monat;
        this._datum = new Date(jahr, monat);
        this._eintraege = [];
        this._ausgaben = 0;
        this._kategorien = []
        this._html = this._html_generieren();
    }

    jahr() {
        return this._jahr;
    }

    monat() {
        return this._monat;
    }

    eintrag_hinzufuegen(neuer_eintrag) {
        this._eintraege.push(neuer_eintrag);
        this._ausgaben += neuer_eintrag.betrag;
        this._kategorie_summieren(neuer_eintrag);
    }

    _kategorie_summieren(neuer_eintrag) {
        this._kategorien.forEach(kat => {
            if (kat.name === neuer_eintrag.kategorie) {
                kat.summe += neuer_eintrag.betrag;
            }
        });
    }

    _html_generieren() {
        let monatsartikel = document.createElement('article');
        monatsartikel.setAttribute('class', 'monatsartikel');
        let monats_header = document.createElement('h2');
        monats_header.innerText = `${this._monat} ${this._jahr}, Ausgaben: ${this._ausgaben}`;
        monatsartikel.insertAdjacentElement("afterbegin", monats_header);
        let kategorienliste = document.createElement('ul');
        this._kategorien.forEach(kat => {
            let listenpunkt = document.createElement('li');
            listenpunkt.innerText = `${kat.name}: ${kat.summe}`
            kategorienliste.appendChild(listenpunkt);
        });
        monatsartikel.appendChild(kategorienliste);
        return monatsartikel;
        }

    anzeigen() {
        document.querySelector("#eingabebereich").insertAdjacentElement("afterend", this._html);
    };
}
