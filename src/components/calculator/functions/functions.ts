import { basicIncomeAmount, raiseAmount, taxRates, salariesLimit } from '../../../constants';
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
    if (salary <= salariesLimit.normal) {
      finalIncome = salary * (1 - taxRate);
    } else if (salary > salariesLimit.normal && salary < salariesLimit.high) {
      finalIncome =
        salariesLimit.normal * (1 - taxRate) +
        (salary - salariesLimit.normal) * 0.5;
    } else {
      finalIncome =
        salariesLimit.normal * (1 - taxRate) +
        (salariesLimit.high - salariesLimit.normal) * 0.5 +
        (salary - salariesLimit.high) * 0.3;
    }
    return finalIncome;
  };