class Eingabeformular {

    constructor() {
        this._kategorie = new Kategorie();
        this._html = this._html_generieren();
    }

    _aktueller_monat() {
        return new Date();
    }

    _datum_verarbeiten(e) {
        let monat = e.target.elements.monat.value;
        let jahr = this._aktueller_monat().getFullYear();
        return new Date(jahr, monat);
    }

    _formulardaten_holen(e) {
        return {
            betrag: this._betrag_verarbeiten(e.target.elements.betrag.value),
            kategorie: e.target.elements.kategorie.value,
            datum: this._datum_verarbeiten(e)
        }
    }

    _betrag_verarbeiten(eingabe) {
        return parseFloat(eingabe.replace(',', '.')) * 100;
    }

    _absenden_event_hinzufuegen(eingabeformular) {
        eingabeformular.querySelector('#eingabeformular').addEventListener("submit", e => {
            e.preventDefault();
            let formulardaten = this._formulardaten_holen(e);
            haushaltsbuch.eintrag_hinzufuegen(formulardaten);
        });
    }

    _html_generieren() {
        let eingabeformular = document.createElement('article');
        eingabeformular.setAttribute('id', 'eingabebereich');
        eingabeformular.innerHTML = `
            <form id="eingabeformular" action="#" method="get">
                <div>
                    <label for="betrag">Betrag</label>
                    <input form="eingabeformular" id="betrag" type="number" required step="1" />
                </div>
                <div>
                    <label for="kategorie" id="label_for_kategorien">Kategorie</label>
                    <!-- <select id="kategorie" form="eingabeformular"/>
                        <option value="Lotterleben" form="eingabeformular">Lotterleben</option>
                        <option value="Haushalt" form="eingabeformular">Haushalt</option>
                        <option value="Essen" form="eingabeformular">Essen</option>
                        <option value="Vergnügen" form="eingabeformular">Vergnügen</option>
                        <option value="Auto" form="eingabeformular">Auto</option>
                        <option value="Reisen" form="eingabeformular">Reisen</option>
                    </select> -->
                </div>
                <div>
                    <label for="monat">Monat</label>
                    <select id="monat" form="eingabeformular"/>
                        <option value="10" form="eingabeformular">November</option>
                        <option value="11" form="eingabeformular">Dezember</option>
                    </select>
                </div>
                <div>
                    <button type="submit" id="speichern" form="eingabeformular">Speichern</button>
                </div>
            </form>`;
        this._absenden_event_hinzufuegen(eingabeformular);
        return eingabeformular;
    }

    anzeigen() {
        document.querySelector('#section_left').insertAdjacentElement('afterbegin', this._html);
        document.querySelector("#label_for_kategorien").insertAdjacentElement('afterend', this._kategorie.kategorien_html_erstellen());
    }
};
