class Monatsobjekt {

    constructor(jahr, monat) {
        this._jahr = jahr;
        this._monat = monat;
        this._eintraege = [];
        this._ausgaben = 0;
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
    }

    _html_generieren() {
        let monatsartikel = document.createElement('article');
        monatsartikel.setAttribute('class', 'monatsartikel');
        let monats_header = document.createElement('h2');
        monats_header.innerText = `${this._monat} ${this._jahr}, Ausgaben: ${this._ausgaben}`;
        monatsartikel.insertAdjacentElement("afterbegin", monats_header);
        // let monatseintraege = kategoriensammlung._html;
        // monats_header.insertAdjacentElement("afterend", monatseintraege);
        return monatsartikel;
        }

    anzeigen() {
        document.querySelector("#eingabebereich").insertAdjacentElement("afterend", this._html);
    };
}
