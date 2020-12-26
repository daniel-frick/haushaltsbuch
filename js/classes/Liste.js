
class Liste {

    _aktueller_monat() {
        return new Date();
    }

    _monat_ermitteln() {
        for(let monat of haushaltsbuch._monatssammlung._alle_monate) {
            if((monat._monat === this._aktueller_monat().getMonth()) && (monat._jahr = this._aktueller_monat().getFullYear())) {
                return monat;
            }
        }
    }

    _listenpunkt_html(eintrag) {
        let listenpunkt = document.createElement('li');
        listenpunkt.setAttribute("data-timestamp", eintrag.timestamp);
        let span_kat = document.createElement('span');
        span_kat.setAttribute('class', 'betrag');
        span_kat.innerText = `${this._betrag_zu_string(eintrag.betrag)} Euro`
        listenpunkt.appendChild(span_kat);
        let span_betrag = document.createElement('span');
        span_betrag.setAttribute('class', 'kategorie');
        span_betrag.innerText = `${eintrag.kategorie}`;
        listenpunkt.appendChild(span_betrag);
        let span_entfernen = document.createElement('span');
        span_entfernen.setAttribute('class', 'delete');
        span_entfernen.innerText = `Eintrag entfernen`;
        listenpunkt.appendChild(span_entfernen);
        this._eintrag_entfernen_event_hinzufuegen(listenpunkt);
        return listenpunkt;
    }

    _eintrag_entfernen_event_hinzufuegen(listenpunkt) {
        listenpunkt.querySelector(".delete").addEventListener("click", e => {
            let timestamp = parseInt(e.target.parentElement.getAttribute("data-timestamp"));
            this._eintrag_entfernen(timestamp);
        });
    }

    _eintrag_entfernen(timestamp) {
        let monat = this._monat_ermitteln();
        let index = monat._eintraege.indexOf(monat._eintraege.find(eintrag => eintrag.timestamp === timestamp));
        monat._eintraege.splice(index, 1);
        monat.aktualisieren();
        haushaltsbuch._eintrag_entfernen(timestamp);
        haushaltsbuch._aktuell.anzeigen();
        haushaltsbuch._gesamt.anzeigen();
        this.anzeigen();
    }

    _html_generieren() {
          let monat = this._monat_ermitteln();
          let monatsartikel = document.createElement('article');
          monatsartikel.setAttribute('id', 'aktueller_monat_liste');
          monatsartikel.setAttribute('class', 'eintragsobjekt');
          let monats_header = document.createElement('h2');
          monats_header.innerText = `${this._datum_zu_text(monat._datum)}: ${this._betrag_zu_string(monat._ausgaben)} Euro`;
          monatsartikel.insertAdjacentElement("afterbegin", monats_header);
          let eintragsliste = document.createElement('ul');
          eintragsliste.setAttribute('class', 'monatsobjekt');
          for(let eintrag of monat._eintraege) {
            eintragsliste.appendChild(this._listenpunkt_html(eintrag));
          }
          monatsartikel.appendChild(eintragsliste);
          return monatsartikel;
    }

    anzeigen() {
        if (document.querySelector("#aktueller_monat_liste")) {
            document.querySelector("#aktueller_monat_liste").remove();
        }
        document.querySelector("#section_right").insertAdjacentElement("afterbegin", this._html_generieren());
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }

    _datum_zu_text(monat) {
        return monat.toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric"
        });
    }
}
