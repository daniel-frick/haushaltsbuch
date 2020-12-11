
class Gesamt {

    constructor() {
        this._gesamtbilanz = 0;
    }

    _gesamt_summe_berechnen() {
        this._gesamtbilanz = 0;
        haushaltsbuch.eintraege.forEach(eintrag => {
            this._gesamtbilanz += eintrag.betrag;
        });
        return `Gesamtausgaben: ${this._betrag_zu_string(this._gesamtbilanz)} Euro`;
    }

    _gesamt_summe_html() {
        let kopf = document.createElement('h2');
        kopf.textContent = `${this._gesamt_summe_berechnen()}`;
        return kopf;
    }

    anzeigen() {
        let monatsartikel = document.createElement('article');
        monatsartikel.setAttribute('id', 'gesamt');
        monatsartikel.appendChild(this._gesamt_summe_html());
        monatsartikel.appendChild(kategoriensammlung._html_generieren());
        document.querySelector('#eingabebereich').insertAdjacentElement("afterend", monatsartikel);
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }
}
