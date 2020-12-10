class Eingabeformular {

    constructor() {
        this._html = this._html_generieren();
    }

    _formulardaten_holen(e) {
        return {
            betrag: this._betrag_verarbeiten(e.target.elements.betrag.value),
            kategorie: e.target.elements.kategorie.value,
            datum: new Date()
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
                    <input form="eingabeformular" id="betrag" type="number" required step="0.01" />
                </div>
                <div>
                    <label for="kategorie">Kategorie</label>
                    <select id="kategorie" form="eingabeformular"/>
                        <option value="Lotterleben" form="eingabeformular">Lotterleben</option>
                        <option value="Haushalt" form="eingabeformular">Haushalt</option>
                        <option value="Essen" form="eingabeformular">Essen</option>
                        <option value="Vergnügen" form="eingabeformular">Vergügen</option>
                        <option value="Auto" form="eingabeformular">Auto</option>
                        <option value="Reisen" form="eingabeformular">Reisen</option>
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
    }
};
