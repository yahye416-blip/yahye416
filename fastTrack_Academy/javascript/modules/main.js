// main.js
import { surahs } from './surahData.js';
import { getSurahByName, getRandomSurah } from './utils.js';

const dropdown = document.getElementById('surahSelect');
const infoDiv = document.getElementById('info');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');

// Populate dropdown
surahs.forEach(surah => {
  const option = document.createElement('option');
  option.value = surah.name;
  option.textContent = surah.name;
  dropdown.appendChild(option);
});

// Search button click
searchBtn.addEventListener('click', () => {
  const selectedName = dropdown.value;
  const surah = getSurahByName(selectedName);
  if (surah) {
    infoDiv.innerHTML = `
      <h3>${surah.name}</h3>
      <p><strong>Meaning:</strong> ${surah.meaning}</p>
      <p><strong>Number of verses:</strong> ${surah.verses}</p>
      <p><em>city :</em> ${surah.city}<p>
    `;
  }
});

// Random button click
randomBtn.addEventListener('click', () => {
  const randomSurah = getRandomSurah();
  infoDiv.innerHTML = `
    <h3>${randomSurah.name}</h3>
    <p><strong>Meaning:</strong> ${randomSurah.meaning}</p>
    <p><strong>Number of verses:</strong> ${randomSurah.verses}</p>
    <p><em>city: </em> ${randomSurah.city}<p>
  `;
});
