// regions.js

import { getAllCountries } from "./api.js";

export async function getAllRegions() {
  const countries = await getAllCountries();
  const regions = countries.map((c) => c.region).filter(Boolean); // remove empty values

  // unique regions
  return [...new Set(regions)].sort();
}
