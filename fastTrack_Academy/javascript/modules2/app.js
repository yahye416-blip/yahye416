// app.js

import { getCountryByName } from "./api.js";
import { getAllRegions } from "./regions.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("countryInput");
const result = document.getElementById("result");
const regionList = document.getElementById("regionList");

// Load regions when page starts
async function loadRegions() {
  regionList.innerHTML = "<option>Loading regions...</option>";
  try {
    const regions = await getAllRegions();
    regionList.innerHTML = regions
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");
  } catch (err) {
    regionList.innerHTML = "<option>Error loading regions</option>";
  }
}

loadRegions();

// Search by country name
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const countryName = input.value.trim();
  if (!countryName) return;

  result.textContent = "Loading...";

  try {
    const data = await getCountryByName(countryName);
    const country = data[0];

    result.innerHTML = `
      <h2>${country.name.common}</h2>
      <p>Population: ${country.population.toLocaleString()}</p>
      <p>Region: ${country.region}</p>
      <img src="${country.flags.svg}" alt="Flag of ${
      country.name.common
    }" width="150"/>
    `;
  } catch (err) {
    result.textContent = err.message;
  }
});
