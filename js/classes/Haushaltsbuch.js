
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
        this.eintraege.push(neuer_eintrag);
        monatssammlung.eintrag_hinzufuegen(neuer_eintrag);
        this._kategorien_aktualisieren();
        this._gesamtbilanz_berechnen(neuer_eintrag);
        gesamt.anzeigen();
        aktuell.anzeigen();
        listeaktuell.anzeigen();
    }

    _gesamtbilanz_berechnen() {
        this.gesamtbilanz = 0;
        let zahl_der_monate = monatssammlung._alle_monate.length;
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

    _kategorien_aktualisieren () {
        this._kategorien.forEach(kat => {
            kat.summe = 0;
            this.eintraege.forEach(eintrag => {
                if(eintrag.kategorie === kat.name){
                    kat.summe += eintrag.betrag;
                }
            })
        })
    }

    _eintrag_entfernen(timestamp) {
        let index = this.eintraege.indexOf(this.eintraege.find(eintrag => eintrag.timestamp === timestamp));
        this.eintraege.splice(index, 1);

        // this.eintraege = this.eintraege.filter(function(eintrag, index, arr) {
        //     return eintrag.timestamp != timestamp;
        // });
        this._gesamtbilanz_berechnen();
        this._kategorien_aktualisieren();
        console.log(this);
    }
}

//     _eintrag_entfernen(timestamp) {
//         console.log(`erhaltener timestamp im HHB_eintrag_entfernen ${timestamp}`);
//         this.eintraege.forEach(eintrag => {
//             if (timestamp === eintrag.timestamp) {
//                 let delete_index = this.eintraege.indexOf(eintrag);
//                 console.log(`Ermittelter Eintrag-timestamp ${eintrag.timestamp}`);
//                 console.log(delete_index);
//                 this.eintraege.splice(delete_index, 1);
//         }});
//         this._gesamtbilanz_berechnen();
//         this._kategorien_aktualisieren();
//     }
// }
