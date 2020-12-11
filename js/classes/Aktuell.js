// if ((eintrag.datum.getFullYear() === aktuell.getFullYear() && eintrag.datum.getMonth()) === aktuell.getMonth()) {
class Aktuell {
  constructor() {
        this._gesamtbilanz = 0;
    }

    _aktueller_monat () {
        return new Date();
    }

    _summe_berechnen () {
        let bilanz = 0;
        let aktuell = new Date();
        let aktuell_ausgeschrieben = aktuell.toLocaleString("de-DE", {
            month: "long",
            year: "numeric"
        });
        haushaltsbuch.eintraege.forEach(eintrag => {
            if ((eintrag.datum.getFullYear() === aktuell.getFullYear()) && (eintrag.datum.getMonth() === aktuell.getMonth())) {
                bilanz += eintrag.betrag;
            }
        });
        return `${aktuell_ausgeschrieben}: ${this._betrag_zu_string(bilanz)} Euro`;
    }

    _summe_html () {
        let kopf = document.createElement('h2');
        kopf.textContent = `${this._summe_berechnen()}`;
        return kopf;
    }

    _kategorie_summieren() {
        const aktuell = new Date();
        let kategorien_liste = document.createElement('ul');
        kategoriensammlung._kat_sammlung.forEach(katakt => {
            haushaltsbuch.eintraege.forEach(eintrag => {
                if (
                    (katakt.name === eintrag.kategorie)  &&
                    (eintrag.datum.getFullYear() === aktuell.getFullYear()) &&
                    (eintrag.datum.getMonth() === aktuell.getMonth())
                )
                   {
                    katakt.summe = 0;
                    katakt.summe += eintrag.betrag;
                   }
            });
            let kategorien_punkt = document.createElement('li');
            kategorien_punkt.textContent = `${katakt.name}: ${this._betrag_zu_string(katakt.summe)} Euro`;
            kategorien_liste.appendChild(kategorien_punkt);
        });
        return kategorien_liste;
    }

    anzeigen() {
        let monatsartikel = document.createElement('article');
        monatsartikel.setAttribute('id', 'aktueller_monat');
        monatsartikel.appendChild(this._summe_html());
        monatsartikel.appendChild(this._kategorie_summieren());
        document.querySelector('#gesamt').insertAdjacentElement("afterend", monatsartikel);
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }
}
