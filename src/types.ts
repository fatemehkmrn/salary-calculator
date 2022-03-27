export type Cities = 'Stockholm' | 'Gothenburg';
export type Years = '2019' | '2020';
export type Fields = 'Developer' | 'Teacher' | 'Cashier';

export type IData = {
  experience: number;
  field: Fields;
  location: Cities;
  year: Years;
};

export interface IGrossIncomeProps {
  income: number;
}

export interface IBasicIncomeAmount {
  Developer: number;
  Teacher: number;
  Cashier: number;
}

export interface IRaiseAmount {
  junior: number;
  mid_level: number;
  senior: number;
  advanced: number;
}

export interface ITaxRate {
  Stockholm: { 2019: number; 2020: number };
  Gothenburg: { 2019: number; 2020: number };
}

export interface IButtonProps {
  text: string;
}
