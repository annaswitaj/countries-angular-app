export interface CountryGeneral {
  altSpellings: string[];
  flags: { alt: string; png: string; svg: string };
  name: CountryName & [nativeName: CountryName];
  cca2: string;
}

export interface CountryDetails extends CountryGeneral {
  currencies: { [key: string]: Currency };
  capital: string[];
  population: number;
}

interface CountryName {
  common: string;
  official: string;
}
export interface Currency {
  name: string;
  symbol: string;
}

export interface CountriesTable {
  flag: string;
  name: string;
  cca2: string;
}
