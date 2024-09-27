const express = require("express");
const app = express();
const path = require("path");

// Objek race yang berisi berbagai jenis ras dan bobotnya
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

// Fungsi untuk memilih ras acak berdasarkan probabilitas
function getRandomRace() {
   let totalWeight = Object.values(race).reduce((acc, val) => acc + val, 0);
   let random = Math.random() * totalWeight;
   for (let [key, value] of Object.entries(race)) {
      if (random < value) {
         return key;
      }
      random -= value;
   }
}

// Fungsi untuk menghasilkan title dan note acak
function getRandomTitle() {
   const titles = ["Warrior", "Mage", "Rogue", "Healer", "Tank", "Assassin"];
   return titles[Math.floor(Math.random() * titles.length)];
}

function getRandomNote() {
   const notes = [
      "Brave and strong.",
      "Known for wisdom.",
      "Quick and stealthy.",
      "Caring and protective.",
      "Fierce and loyal.",
   ];
   return notes[Math.floor(Math.random() * notes.length)];
}

// Untuk menyajikan file HTML
app.use(express.static(path.join(__dirname, "html")));

// Endpoint untuk mendapatkan data acak
app.get("/getRandomData", (req, res) => {
   const randomRace = getRandomRace();
   const randomTitle = getRandomTitle();
   const randomNote = getRandomNote();
   res.json({
      race: randomRace,
      title: randomTitle,
      note: randomNote,
   });
});

app.listen(3000, () => {});
