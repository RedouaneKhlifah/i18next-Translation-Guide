// languages

import { languagesI } from "./languagesTypes";

const languages: languagesI[] = [
  { name: "Argentina", value: "ar" },
  { name: "Australia", value: "au" },
  { name: "Belgium", value: "be" },
  { name: "Brazil", value: "br" },
  { name: "Canada", value: "ca" },
  { name: "China", value: "cn" },
  { name: "Côte d'Ivoire", value: "ci" },
  { name: "Denmark", value: "dk" },
  { name: "Egypt", value: "eg" },
  { name: "Finland", value: "fi" },
  { name: "France", value: "fr" },
  { name: "Germany", value: "de" },
  { name: "India", value: "in" },
  { name: "Italy", value: "it" },
  { name: "Japan", value: "jp" },
  { name: "Mexico", value: "mx" },
  { name: "Netherlands", value: "nl" },
  { name: "New Zealand", value: "nz" },
  { name: "Nigeria", value: "ng" },
  { name: "Norway", value: "no" },
  { name: "Russia", value: "ru" },
  { name: "South Africa", value: "za" },
  { name: "South Korea", value: "kr" },
  { name: "Spain", value: "es" },
  { name: "Sweden", value: "se" },
  { name: "Switzerland", value: "ch" },
  { name: "Turkey", value: "tr" },
  { name: "United Kingdom", value: "gb" },
  { name: "United States", value: "us" },
];

export const chunkArray = (
  array: languagesI[],
  size: number
): languagesI[][] => {
  const chunkedArr: languagesI[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export default languages;
