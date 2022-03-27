import { basicIncomeAmount, raiseAmount, taxRates } from '../../../constants';
import { Cities, Fields, Years, IData } from '../../../types';

export const raiseCalculator = (experience: number): number => {
    let raise: number = 1;
    switch (true) {
      case experience < 4:
        raise = raiseAmount.junior;
        break;
      case experience < 8:
        raise = raiseAmount.mid_level;
        break;
      case experience < 11:
        raise = raiseAmount.senior;
        break;
      case experience >= 11:
        raise = raiseAmount.advanced;
        break;
    }
    return raise;
  };
  
  export const handleCalculate = (data: IData): number => {
    const { experience, field, location, year } = data;
    let finalIncome: number;
    const basicSalary: number = basicIncomeAmount[field as Fields];
    const salary: number = raiseCalculator(experience) * basicSalary;
    const taxRate: number = taxRates[location as Cities][year as Years];
    if (salary <= 36000) {
      finalIncome = salary * (1 - taxRate);
    } else if (salary > 36000 && salary < 45000) {
      finalIncome = 36000 * (1 - taxRate) + (salary - 36000) * 0.5;
    } else {
      finalIncome = 36000 * (1 - taxRate) + 9000 * 0.5 + (salary - 45000) * 0.3;
    }
    return finalIncome;
  };
  