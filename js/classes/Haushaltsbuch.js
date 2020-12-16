
class Haushaltsbuch {

    constructor() {
        this.eintraege = [];
        this.gesamtbilanz = 0;
        this._kategorien = [];
    }

    eintrag_hinzufuegen(daten) {
        let neuer_eintrag = new Eintrag(
            daten.betrag,
            daten.kategorie,
            daten.datum
        );
        console.clear();
        this.eintraege.push(neuer_eintrag);
        monatssammlung.eintrag_hinzufuegen(neuer_eintrag);
        this._kategorie_summieren(neuer_eintrag);
        this._gesamtbilanz_berechnen(neuer_eintrag);
        if(document.querySelector('#gesamt')) {
            document.querySelector('#gesamt').remove()
        }
        gesamt.anzeigen();


        if(document.querySelector('#aktueller_monat')) {
            document.querySelector('#aktueller_monat').remove()
        }
        aktuell.anzeigen();
    }

    _gesamtbilanz_berechnen() {
        this.gesamtbilanz = 0;
        let zahl_der_monate = monatssammlung._alle_monate.length;
        console.log(zahl_der_monate);
        this.eintraege.forEach(eintrag => {
            this.gesamtbilanz += eintrag.betrag;
        })
        this.gesamtbilanz = this.gesamtbilanz / zahl_der_monate;
    }

    _kategorie_summieren(neuer_eintrag) {
        let zahl_der_monate = monatssammlung._alle_monate.length;
        if (this._kategorien.length === 0) {
            kategorie.kategorien_sammeln().forEach(kat => {
            haushaltsbuch._kategorien.push(kat);
        })};
        this._kategorien.forEach(kat => {
            this.eintraege.forEach(eintrag => {
                if (kat.name === eintrag.kategorie) {
                    kat.summe = 0;
                    kat.summe += eintrag.betrag;
            }});
            kat.summe = kat.summe / zahl_der_monate;
        });
    }
}

// _gesamtbilanz_berechnen() {
//     this.gesamtbilanz = 0;
//     this.eintraege.forEach(eintrag => {
//         this.gesamtbilanz += eintrag.betrag;
//     });
// }
