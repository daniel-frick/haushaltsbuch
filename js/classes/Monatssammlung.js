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
        neuer_monat.eintrag_hinzufuegen(neuer_eintrag);
        this._alle_monate.push(neuer_monat);
    }

    _eintrag_entfernen(timestamp) {
        this._alle_monate.forEach(monat => {
            for(let i = 0; i < monat._eintraege.length; i++) {
                if (monat._eintraege[i].timestamp === timestamp) {
                    monat._eintraege.splice(i, 1);
                    break;
                }
            }
        })
        console.log(this._alle_monate);
        aktuell.anzeigen();
    }
}
