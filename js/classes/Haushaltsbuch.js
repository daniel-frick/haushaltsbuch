
class Haushaltsbuch {

    constructor() {
        this.eintraege = [];
        // this._monatslistensammlung = new Monatslistensammlung();
        this.gesamtbilanz = 0;
    }

    eintrag_hinzufuegen(daten) {
        let neuer_eintrag = new Eintrag(
            daten.betrag,
            daten.kategorie,
            daten.datum
        );
        console.clear();
        this.eintraege.push(neuer_eintrag);
        this._gesamtbilanz_berechnen();
        // kategoriensammlung.kategorie_summieren(neuer_eintrag);
        monatssammlung.eintrag_hinzufuegen(neuer_eintrag);
        console.log(monatssammlung);
        // kategoriensammlung._html_generieren();
        // if (document.getElementById("gesamt")) {
        //     document.getElementById("gesamt").remove();
        // };
        // if (document.getElementById("aktueller_monat")) {
        //     document.getElementById("aktueller_monat").remove();
        // };
        // aktuell._kategorie_summieren();
        // gesamt.anzeigen();
        // aktuell.anzeigen();
    }

    _gesamtbilanz_berechnen() {
        this.gesamtbilanz = 0;
        this.eintraege.forEach(eintrag => {
            this.gesamtbilanz += eintrag.betrag;
        });
    }

    // aktueller_monat_summe_berechnen() {
    //     let bilanz = 0;
    //     let aktuell = new Date();
    //     let aktuell_ausgeschrieben = aktuell.toLocaleString("de-DE", {
    //         month: "long",
    //         year: "numeric"
    //     });
    //     this.eintraege.forEach(eintrag => {
    //         if ((eintrag.datum.getFullYear() === aktuell.getFullYear() && eintrag.datum.getMonth()) === aktuell.getMonth()) {
    //             bilanz += eintrag.betrag;
    //         }
    //     });
    //     return `${aktuell_ausgeschrieben}: ${this._betrag_zu_string(bilanz)} Euro`;
    // }
    //
    // aktueller_monat_summe_html() {
    //     let kopf = document.createElement('h2');
    //     kopf.textContent = `${this.aktueller_monat_summe_berechnen()}`;
    //     return kopf;
    // }
    //
    // aktueller_monat_anzeigen() {
    //     let monatsartikel = document.createElement('article');
    //     monatsartikel.setAttribute('id', 'aktueller_monat');
    //     monatsartikel.appendChild(this.aktueller_monat_summe_html());
    //     document.querySelector('#gesamt').insertAdjacentElement("afterend", monatsartikel);
    // }

    //     this._ausgaben_summieren();
    //     this._summe_anzeigen();
    //     neuer_eintrag._html();
    // }
    //
    // _ausgaben_summieren() {
    //     this._gesamtbilanz = 0;
    //     this._eintraege.forEach(item => {
    //         this._gesamtbilanz += item.betrag;
    //         console.log(this._gesamtbilanz);
    //     })
    // }
    //
    // _summe_anzeigen() {
    //     if (document.getElementById("gesamtsumme")) {
    //         document.getElementById("gesamtsumme").remove();
    //     }
    //     let div = document.createElement('div');
    //     div.setAttribute('id', 'gesamtsumme');
    //     div.innerText = `Gesamtausgaben: ${this._betrag_zu_string(this._gesamtbilanz)} Euro`;
    //     document.querySelector('#eingabebereich').insertAdjacentElement("afterend", div);
    // }
    //
    // _betrag_zu_string(betrag) {
    //     return (betrag/100).toFixed(2).replace(".", ",");
    // }

    // _eintraege_anzeigen(eintrag) {
    //     let ul = document.createElement('ul');
    //     ul.setAttribute('class', 'posten');
    //
    //     let betrag = document.createElement('span');
    //     betrag.textContent = `${this._betrag_zu_string(eintrag.get("eingabe"))} Euro`;
    //     ul.insertAdjacentElement("afterbegin", betrag);
    //
    //     let kategorie = document.createElement('span');
    //     kategorie.textContent = eintrag.get("kategorie");
    //     betrag.insertAdjacentElement("afterend", kategorie);
    //
    //     let datum = document.createElement('span');
    //     datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
    //         year: "numeric",
    //         month: "long",
    //     });
    //     kategorie.insertAdjacentElement("afterend", datum);
    //     document.querySelector("#gesamtsumme").insertAdjacentElement("afterend", ul);
    // }
}
