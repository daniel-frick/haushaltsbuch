class Monatsobjekt {

    constructor(jahr, monat) {
        this._jahr = jahr;
        this._monat = monat;
        this._datum = new Date(jahr, monat);
        this._eintraege = [];
        this._ausgaben = 0;
        this._kategorien = []
        this._kategorie = new Kategorie();
        this._html = this._html_generieren();
    }

    jahr() {
        return this._jahr;
    }

    monat() {
        return this._monat;
    }

    eintrag_hinzufuegen(eintrag) {
        this._eintraege.push(eintrag);
        this._ausgaben = 0;
        this._ausgaben += eintrag.betrag;
        this._kategorie_summieren();
    }
    //
    _kategorie_summieren() {
        this._kategorien.forEach(kat => {
            this._eintraege.forEach(eintrag => {
                if (kat.name === eintrag.kategorie) {
                    kat.summe += eintrag.betrag;
            }

        })
        });
    }

    aktualisieren() {
        this._kategorien = [];
        this._kategorie.kategorien_sammeln().forEach(kat => {
            this._kategorien.push(kat);
        });
        this._kategorien.forEach(kat => {
            kat.summe = 0;
            this._eintraege.forEach(eintrag => {
                if(eintrag.kategorie === kat.name){
                    kat.summe += eintrag.betrag
                }
            })
        })
        this._ausgaben = 0;
        this._eintraege.forEach(eintrag => {
            this._ausgaben += eintrag.betrag;
        })
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
