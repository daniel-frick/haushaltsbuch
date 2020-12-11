
let section_left = document.createElement('section');
section_left.setAttribute('id', 'section_left');
document.body.insertAdjacentElement('afterbegin', section_left);

let section_right = document.createElement('section');
section_right.setAttribute('id', 'section_right');
document.querySelector("#section_left").insertAdjacentElement('afterend', section_right);


let eingabeformular = new Eingabeformular();
eingabeformular.anzeigen()
let gesamt = new Gesamt();
let aktuell = new Aktuell();
let haushaltsbuch = new Haushaltsbuch();
let kategoriensammlung = new Kategoriensammlung();
let kategorie = new Kategorie();
kategorie.kategorien_sammeln();
let monatsobjekt = new Monatsobjekt();
let monatssammlung = new Monatssammlung();
