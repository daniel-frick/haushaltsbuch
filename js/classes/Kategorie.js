
class Kategorie {
    constructor(name, summe) {
        this.name = name;
        this.summe = summe;
    }

    kategorien_sammeln() {
        let kategorienliste = []
        let lotterleben = new Kategorie(
            "Lotterleben", 0);
        kategorienliste.push(lotterleben);

        let haushalt = new Kategorie(
            "Haushalt", 0);
        kategorienliste.push(haushalt);

        let essen = new Kategorie(
            "Essen",0);
        kategorienliste.push(essen);

        let vergnuegen = new Kategorie(
            "Vergnügen", 0);
        kategorienliste.push(vergnuegen);

        let auto = new Kategorie(
            "Auto", 0);
        kategorienliste.push(auto);

        let reisen = new Kategorie(
            "Reisen", 0);
        kategorienliste.push(reisen);

        return kategorienliste;
    }
}
