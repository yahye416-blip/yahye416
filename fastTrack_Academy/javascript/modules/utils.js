// utils.js
import { surahs } from './surahData.js';

export function getSurahByName(name) {
  return surahs.find(surah => surah.name.toLowerCase() === name.toLowerCase());
}
// if u see export this is a module

export function getRandomSurah() {
  const index = Math.floor(Math.random() * surahs.length);
  return surahs[index];
}
