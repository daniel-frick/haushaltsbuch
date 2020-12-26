
class Kategorie {
    constructor(name, summe) {
        this.name = name;
        this.summe = summe;
    }

    _kategorienliste_erzeugen() {
        return ['Haushalt', 'Auto', 'Kleidung', 'Reisen'];
    }

    kategorien_sammeln() {
        let kategorienliste = [];
        this._kategorienliste_erzeugen().forEach(kategorie => {
            let neue_kat = new Kategorie(kategorie, 0);
        kategorienliste.push(neue_kat);
    });
        return kategorienliste;
    }

    kategorien_html_erstellen() {
        let select = document.createElement('select');
        select.setAttribute('id', 'kategorie');
        select.setAttribute('form', 'eingabeformular');
        this._kategorienliste_erzeugen().forEach(kategorie => {
            let option = document.createElement('option');
            option.setAttribute('value', kategorie);
            option.setAttribute('form', "eingabeformular");
            option.innerText = kategorie;
            select.appendChild(option);
        });
        return select;
    }
}
