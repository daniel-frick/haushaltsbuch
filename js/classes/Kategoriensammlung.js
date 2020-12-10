class Kategoriensammlung {

    constructor() {
        this._kat_sammlung = [];
        this._html = this._html_generieren();
    }

    kategorie_summieren(neuer_eintrag) {
        this._kat_sammlung.forEach(kat => {
                if (kat.name === neuer_eintrag.kategorie) {
                    kat.summe += neuer_eintrag.betrag;
                }
        });
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }

    kategorien_loggen() {
        this._kat_sammlung.forEach(kat => {
            console.log(`${kat.name}: ${this._betrag_zu_string(kat.summe)} Euro`);
        });
    }

    _html_generieren() {
        let kategorien_liste = document.createElement('ul');
        this._kat_sammlung.forEach(kat => {
            let kategorien_punkt = document.createElement('li');
            kategorien_punkt.textContent = `${kat.name}: ${this._betrag_zu_string(kat.summe)} Euro`;
            kategorien_liste.appendChild(kategorien_punkt);
        });
        return kategorien_liste;
        // document.querySelector("#eingabebereich").insertAdjacentElement("afterend", kategorien_liste);
    }

    // anzeigen() {
    //     document.querySelector("#eingabebereich").insertAdjacentElement("afterend", this._html);
    // }
}
