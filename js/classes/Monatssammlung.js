class Monatssammlung {

    constructor() {
        this._alle_monate = [];
        this._html = this._html_generieren;
    }

    eintrag_hinzufuegen(neuer_eintrag) {
        let eintragsmonat = neuer_eintrag.toLocaleString("de-DE", {month:"numeric"});
        let eintragsjahr = neuer_eintrag.toLocaleString("de-DE", {year:"numeric"});
        let monat_vorhanden = false;
        this._alle_monate.forEach(monatsobjekt => {
            if (eintragsmonat === monatsobjekt.monat() && eintragsjahr === monatsobjekt.jahr()) {
                monatsobjekt.eintrag_hinzufuegen(neuer_eintrag);
                monat_vorhanden = true;
            }
        });
        if (!monat_vorhanden) {
                this._monatsliste_hinzufuegen(eintragsjahr, eintragsmonat, neuer_eintrag);
        }
    };

    _monatsliste_hinzufuegen(jahr, monat, neuer_eintrag) {
        let neuer_monat = new Monatsobjekt(jahr, monat);
        neuer_monat.eintrag_hinzufuegen(neuer_eintrag);
        this._alle_monate.push(neuer_monat);
    }

    _html_generieren() {

    }
}
