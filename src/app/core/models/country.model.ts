export interface CountryGeneral {
  altSpellings: string[];
  flags: { alt: string; png: string; svg: string };
  name: CountryName & [nativeName: CountryName];
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
interface Currency {
  name: string;
  symbol: string;
}

export interface CountriesTable {
  flag: string;
  name: string;
}
