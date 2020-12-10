
class Eintrag {

    constructor(betrag, kategorie) {
        this.betrag = betrag;
        this.kategorie = kategorie;
        this.datum = new Date();
        this.timestamp = Date.now();
        this.html = this._html_generieren();
    }

    _html_generieren() {
        let listenpunkt = document.createElement('li');
        listenpunkt.setAttribute('class', 'posten');
        listenpunkt.setAttribute('data-timestamp', this.timestamp);

        let betrag = document.createElement('span');
        betrag.textContent = `${this._betrag_zu_string(this.betrag)} Euro`;
        listenpunkt.insertAdjacentElement("afterbegin", betrag);

        let kategorie = document.createElement('span');
        kategorie.textContent = this.kategorie;
        betrag.insertAdjacentElement("afterend", kategorie);

        let datum = document.createElement('span');
        datum.textContent = this.datum.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long"
        });
        kategorie.insertAdjacentElement("afterend", datum);

        return listenpunkt;
    }

    _betrag_zu_string(betrag) {
        return (betrag/100).toFixed(2).replace(".", ",");
    }
}
