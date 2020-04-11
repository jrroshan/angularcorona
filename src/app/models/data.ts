export class AllData {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
}

export class CountriesData{
    country: string;
    countryInfo:{
        _id:number;
        iso2:string;
        iso3:string;
    };
    cases:number;
    todayCases:number;
    deaths:number;
    todayDeaths:number;
    recovered:number;
    active:number;
    critical:number;
}