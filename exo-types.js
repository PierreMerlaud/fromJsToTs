// Ce code TypeScript mériterait quelques modifications.
// Suivez les consignes en commentaire pour l'améliorer !
// Toutes demanderont d'utiliser des génériques, que ce soit
// les votres ou ceux proposés par TypeScript.
// N'oubliez pas de chercher dans la documentation : https://www.typescriptlang.org/docs/handbook/utility-types.html
// ====================
var babyDragon = {
    name: "Typeon",
    life: 50,
    attack: 10,
    defense: 20,
};
var babyLicorn = {
    name: "Typemoor",
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
};
var smallArmor = {
    price: 30,
    attack: 2,
    defense: 5,
};
var smallSword = {
    price: 20,
    attack: 5,
};
var smallShield = {
    price: 15,
    defense: 10,
};
var smallMagicalWand = {
    price: 50,
    attack: 4,
    magic: 10,
};
var myWarriorHero = {
    name: "TSolomon",
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [smallArmor, smallSword, smallShield],
};
var myMagicienHero = {
    name: "TSoren",
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
};
