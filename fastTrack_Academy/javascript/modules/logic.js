import { surahs } from './surahData.js';

export function getAyahCount( surahs ) {
  return surahs.reduce((total, surah) => total + surah.verses, 0);
}
// if u see export this is a module