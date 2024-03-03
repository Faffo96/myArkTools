// Funzione per creare un oggetto che rappresenta una creatura
const createCreatureObject = (name, hp, dmg, weight, sex, quantity) => {
    return { name, hp, dmg, weight, sex, quantity };
};

// Array per memorizzare tutte le creature
const creatures = [];

// Funzione per aggiungere una creatura all'array creatures
const addCreature = (creatureFunction) => {
    creatures.push(creatureFunction());
};

// Aggiungi tutte le creature chiamando la funzione addCreature
addCreature(() => createCreatureObject("rex", 11600, 417, null, null, 3));
addCreature(() => createCreatureObject("charca", 31200, 327, null, null, 2));
addCreature(() => createCreatureObject("charca", 30600, 315, null, null, 1));
addCreature(() => createCreatureObject("charca", 30700, 316, null, null, 1));
addCreature(() => createCreatureObject("charca", 31300, 328, null, null, 1));
addCreature(() => createCreatureObject("giga", 34000, 280, null, null, 1));
addCreature(() => createCreatureObject("quetzal", 13275, null, 1500, null, 4));
addCreature(() => createCreatureObject("quetzal", 13000, null, 1500, null, 2));
addCreature(() => createCreatureObject("quetzal", 13180, null, 1520, null, 1));
addCreature(() => createCreatureObject("quetzal", 13350, null, 1540, null, 1));
addCreature(() => createCreatureObject("tuso", 39000, 390, null, null, 1));
addCreature(() => createCreatureObject("tuso", 38200, 495, null, null, 1));
addCreature(() => createCreatureObject("arthropleura", 6700, 460, null, null, 1));
addCreature(() => createCreatureObject("baryonix", 6800, 537, null, null, 2));
addCreature(() => createCreatureObject("theri", 16200, 657, null, "M", 2));
addCreature(() => createCreatureObject("theri", 16200, 657, null, "F", 2));
addCreature(() => createCreatureObject("theri", 11200, 530, null, "M", 3));
addCreature(() => createCreatureObject("theri", 11200, 530, null, "F", 4));
addCreature(() => createCreatureObject("theri", 11200, 572, null, "M", 5));
addCreature(() => createCreatureObject("theri", 11200, 572, null, "F", 3));
addCreature(() => createCreatureObject("theri", 11270, 530, null, "F", 2));
addCreature(() => createCreatureObject("theri", 13500, 549, null, "M", 2));
addCreature(() => createCreatureObject("theri", 13500, 549, null, "F", 2));
addCreature(() => createCreatureObject("theri", 9300, 443, null, "M", 3));
addCreature(() => createCreatureObject("theri", 9300, 443, null, "F", 4));
addCreature(() => createCreatureObject("theri", 9300, 478, null, "M", 5));
addCreature(() => createCreatureObject("theri", 9300, 478, null, "F", 3));
addCreature(() => createCreatureObject("carbo", 10500, null, null, null, 3));
addCreature(() => createCreatureObject("trike", 4700, null, null, null, 5));
addCreature(() => createCreatureObject("stego", 8400, null, null, null, 4));
addCreature(() => createCreatureObject("megalodonte", 8700, null, null, null, 2));
addCreature(() => createCreatureObject("tape", 3700, null, null, null, 4));
addCreature(() => createCreatureObject("thyla", 6200, null, null, null, 2));
addCreature(() => createCreatureObject("thyla", 5800, null, null, null, 1));
addCreature(() => createCreatureObject("thyla", 6200, null, null, null, 2));
addCreature(() => createCreatureObject("basilo", 36200, null, null, null, 2));
addCreature(() => createCreatureObject("bronto", 19800, null, 2700, null, 1));
addCreature(() => createCreatureObject("bronto", 19800, null, 2600, null, 1));
addCreature(() => createCreatureObject("bronto", 19000, null, 2600, null, 1));
addCreature(() => createCreatureObject("bronto", 11600, null, 2600, null, 2));
addCreature(() => createCreatureObject("bronto", 19800, null, 2700, null, 1));

// Funzione per stampare le creature nell'HTML
const printTames = (creaturesArray) => {
    console.log(creaturesArray)
    creaturesArray.forEach(creature => {
        const documentSection = document.getElementById(creature.name);
        const newP = document.createElement('p');
        newP.innerText = `${creature.name}: HP ${creature.hp || 'Unknown'}, DMG ${creature.dmg || 'Unknown'}, WEIGHT ${creature.weight || 'Unknown'}, SEX ${creature.sex || 'Unknown'}, Quantità ${creature.quantity || 'Unknown'}`;
        documentSection.appendChild(newP);
    });
};

// Stampa tutte le creature nell'HTML
printTames(creatures);
