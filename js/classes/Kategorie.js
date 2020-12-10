
class Kategorie {
    constructor(name, summe) {
        this.name = name;
        this.summe = summe;
    }

    kategorien_sammeln() {
        let lotterleben = new Kategorie(
            "Lotterleben", 0);
        kategoriensammlung._kat_sammlung.push(lotterleben);

        let haushalt = new Kategorie(
            "Haushalt", 0);
        kategoriensammlung._kat_sammlung.push(haushalt);

        let essen = new Kategorie(
            "Essen",0);
        kategoriensammlung._kat_sammlung.push(essen);

        let vergnuegen = new Kategorie(
            "Vergnügen", 0);
        kategoriensammlung._kat_sammlung.push(vergnuegen);

        let auto = new Kategorie(
            "Auto", 0);
        kategoriensammlung._kat_sammlung.push(auto);

        let reisen = new Kategorie(
            "Reisen", 0);
        kategoriensammlung._kat_sammlung.push(reisen);
    }
}
