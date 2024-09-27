export default function handler(req, res) {
  const race = {
    demigod: 1,
    god: 0.5,
    human: 80,
    slime: 90,
    elf: 60,
    orc: 70,
    goblin: 75,
    dragon: 8,
    undead: 40,
    demon: 20,
    angel: 4,
    demonlord: 30,
    demonking: 25,
    godtreeworld: 0.25,
    fairy: 55,
  };

  const titles = ["Warrior", "Mage", "Archer", "Healer", "Assassin", "Paladin"];
  const notes = ["Strong and brave", "Wise and powerful", "Quick and agile", "Supportive and kind"];

  // Fungsi untuk mendapatkan nilai random dari array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const randomRace = getRandomItem(Object.keys(race));
  const randomTitle = getRandomItem(titles);
  const randomNote = getRandomItem(notes);

  res.status(200).json({
    race: randomRace,
    title: randomTitle,
    note: randomNote,
  });
}
