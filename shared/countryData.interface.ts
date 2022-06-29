export interface CountryData {
  region: string;
  name: string;
  capital: string;
  population: string;
  languages: Languages[];
  currencies: Currencies[];
  flags: Flags;
  numericCode: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface TransformedData {
  region: string;
  name: string;
  capital: string;
  population: string;
  languages: string[];
  currencies: string[];
  flag: string;
  key: string;
}

export interface ListState {
  name: string;
  flag: string;
}
