// api.js

const BASE_URL = "https://restcountries.com/v3.1";

export async function getCountryByName(name) {
  const res = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}`);
  if (!res.ok) {
    throw new Error(`Country not found: ${name}`);
  }
  return res.json();
}

export async function getAllCountries() {
  const res = await fetch(`${BASE_URL}/all`);
  if (!res.ok) {
    throw new Error("Failed to load countries");
  }
  return res.json();
}
