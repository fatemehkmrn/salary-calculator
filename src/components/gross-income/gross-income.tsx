import React from 'react';
import { formatNumber } from '../../utilities/format';
import { IGrossIncomeProps } from '../../types';
import s from './gross-income.module.css';

const GrossIncome: React.FC<IGrossIncomeProps> = ({ income }) => {
  return (
    <p className={s.income}>
      Your gross annual income would be: SEK {formatNumber(income)}
    </p>
  );
};

export const MemoizedIncome = React.memo(GrossIncome);
