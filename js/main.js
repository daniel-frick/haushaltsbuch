
let section_left = document.createElement('section');
section_left.setAttribute('id', 'section_left');
document.body.insertAdjacentElement('afterbegin', section_left);

let section_right = document.createElement('section');
section_right.setAttribute('id', 'section_right');
document.querySelector("#section_left").insertAdjacentElement('afterend', section_right);


let eingabeformular = new Eingabeformular();
eingabeformular.anzeigen()
let haushaltsbuch = new Haushaltsbuch();
let monatssammlung = new Monatssammlung();
let kategorie = new Kategorie();
let aktuell = new Aktuell();
aktuell.anzeigen();

let gesamt = new Gesamt();
gesamt.anzeigen();

let monatsobjekt = new Monatsobjekt();
