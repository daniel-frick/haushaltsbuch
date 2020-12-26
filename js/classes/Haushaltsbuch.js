
class Haushaltsbuch {

    constructor() {
        this.eintraege = [];
        this.gesamtbilanz = 0;
        this._kategorien = [];
        this._eingabeformular = new Eingabeformular();
        this._gesamt = new Gesamt();
        this._aktuell = new Aktuell();
        this._monatssammlung = new Monatssammlung();
        this._liste = new Liste();
    }

    eintrag_hinzufuegen(daten) {
        let neuer_eintrag = new Eintrag(
            daten.betrag,
            daten.kategorie,
            daten.datum
        );
        this.eintraege.push(neuer_eintrag);
        this._monatssammlung.aktualisieren();
        this._gesamtbilanz_berechnen();
        this._kategorien_aktualisieren();
        this._aktuell.anzeigen();
        this._liste.anzeigen();
        this._speichern();
    }
    _speichern() {
        localStorage.setItem("eintraege", JSON.stringify(this.eintraege));
    }

    _kategorien_aktualisieren() {
        let zahl_der_monate = this._monatssammlung._alle_monate.length;
        this._kategorien.forEach(kat => {
            kat.summe = 0;
            this.eintraege.forEach(eintrag => {
                if (kat.name === eintrag.kategorie) {
                    kat.summe += eintrag.betrag;
            }});
            kat.summe = kat.summe / zahl_der_monate;
        });
        this._gesamt.anzeigen();
    }

    _gesamtbilanz_berechnen() {
        this.gesamtbilanz = 0;
        let zahl_der_monate = this._monatssammlung._alle_monate.length;
        this.eintraege.forEach(eintrag => {
            this.gesamtbilanz += eintrag.betrag;
        })
        this.gesamtbilanz = this.gesamtbilanz / zahl_der_monate;
    }

    _eintrag_entfernen(timestamp) {
        let index = this.eintraege.indexOf(this.eintraege.find(eintrag => eintrag.timestamp === timestamp));
        this.eintraege.splice(index, 1);
        this._gesamtbilanz_berechnen();
        this._kategorien_aktualisieren();
    }

    start() {
        this._eingabeformular.anzeigen();
        this._gesamt.anzeigen();
        this._aktuell.anzeigen();
        this._liste.anzeigen();
    }
}
