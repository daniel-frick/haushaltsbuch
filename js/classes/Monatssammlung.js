class Monatssammlung {

    constructor() {
        this._alle_monate = [];
    }

    aktualisieren() {
            let monat_vorhanden = false;
            console.log(this._alle_monate);
            haushaltsbuch.eintraege.forEach(eintrag => {
                let eintragsmonat = eintrag.datum.getMonth();
                let eintragsjahr = eintrag.datum.getFullYear();
                this._alle_monate.forEach(monat => {
                    if (eintragsmonat === monat.monat() && eintragsjahr === monat.jahr()) {
                        monat._eintraege.push(eintrag);
                        monat.aktualisieren();
                        monat_vorhanden = true;
                    }});
                    console.log(monat_vorhanden);
                    if (!monat_vorhanden) {
                        this._monat_hinzufuegen(eintragsjahr, eintragsmonat, eintrag);
                    }
                });
    }

    _monat_hinzufuegen(jahr, monat, eintrag) {
        let neuer_monat = new Monatsobjekt(jahr, monat);
        neuer_monat._jahr = jahr;
        neuer_monat._monat = monat;
        neuer_monat.aktualisieren();
        this._alle_monate.push(neuer_monat);
        this.aktualisieren();
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
        aktuell.anzeigen();
    }
}
