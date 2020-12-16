class Monatssammlung {

    constructor() {
        this._alle_monate = [];
        this._html = this._html_generieren;
    }

    eintrag_hinzufuegen(neuer_eintrag) {
        let eintragsmonat = neuer_eintrag.datum.getMonth();
        let eintragsjahr = neuer_eintrag.datum.getFullYear();
        let monat_vorhanden = false;
        this._alle_monate.forEach(monatsobjekt => {
            if (eintragsmonat === monatsobjekt.monat() && eintragsjahr === monatsobjekt.jahr()) {
                monatsobjekt.eintrag_hinzufuegen(neuer_eintrag);
                monat_vorhanden = true;
            }
        });
        if (!monat_vorhanden) {
                this._monat_hinzufuegen(eintragsjahr, eintragsmonat, neuer_eintrag);
        }
    };

    _monat_hinzufuegen(jahr, monat, neuer_eintrag) {
        let neuer_monat = new Monatsobjekt(jahr, monat);
        neuer_monat._jahr = jahr;
        neuer_monat._monat = monat;
        // if (neuer_monat._kategorien.length === 0) {
        //     kategorie.kategorien_sammeln().forEach(kat => {
        //     neuer_monat._kategorien.push(kat);
        // })};
        neuer_monat.eintrag_hinzufuegen(neuer_eintrag);
        this._alle_monate.push(neuer_monat);
    }

    _html_generieren() {

    }
}
