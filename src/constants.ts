import { IBasicIncomeAmount,IRaiseAmount, ITaxRate } from "./types";

export const basicIncomeAmount:IBasicIncomeAmount ={
    Developer: 30000,
    Teacher: 27000,
    Cashier: 25000,
  };

  export const raiseAmount: IRaiseAmount = {
    junior: 1,
    mid_level: 1.2,
    senior: 1.4,
    advanced: 1.6,
  }

  export const taxRates : ITaxRate= {
    Stockholm: { 2019: 0.3, 2020: 0.29 },
    Gothenburg: { 2019: 0.25, 2020: 0.22 },
  };

  export const fields = ['Developer', 'Teacher', 'Cashier'];
  export const cities = ['Stockholm', 'Gothenburg'];
  export const years = ['2019', '2020'];
