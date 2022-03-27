import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MemoizedIncome } from '../gross-income/gross-income';
import { IData } from '../../types';
import { years, cities, fields } from '../../constants';
import s from './calculator.module.css';
import { MemoizedSubmitButton } from '../submit-button/submit-botton';
import { MemoizedErrorAlert } from '../error-alert/error-alert';
import { handleCalculate } from './functions/functions';

const Calculator: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();
  const [income, setIncome] = useState<number>(0);

  const calculate = useCallback((data: IData): void => {
    const finalIncome: number = handleCalculate(data);
    setIncome(finalIncome);
  }, []);

  return (
    <div className={s.container}>
      <form
        className={s.form}
        onSubmit={handleSubmit((data) => calculate(data))}
      >
        <label className={s.field}>
          Years of experience:
          <input
            {...register('experience', { required: true })}
            inputMode='numeric'
            type='number'
            className={s.input}
            min='0'
          />
          {errors.experience && <MemoizedErrorAlert />}
        </label>
        <label className={s.field}>
          Field of Profession:
          {fields.map((item) => (
            <label
              key={`field_${item}`}
              htmlFor={`field_${item}`}
              className={s.radio}
            >
              <input
                {...register('field', { required: true })}
                type='radio'
                name='field'
                value={item}
              />
              {item}
            </label>
          ))}
          {errors.field && <MemoizedErrorAlert />}
        </label>
        <label className={s.field}>
          Location:
          <select
            {...register('location', { required: true })}
            className={s.input}
          >
            <option value=''>City...</option>
            {cities.map((item) => (
              <option key={`city_${item}`}>{item}</option>
            ))}
          </select>
          {errors.location && <MemoizedErrorAlert />}
        </label>
        <label className={s.field}>
          Income year:
          <select {...register('year', { required: true })} className={s.input}>
            <option value=''>Income year...</option>
            {years.map((item) => (
              <option value={item} key={`year_${item}`}>
                {item}
              </option>
            ))}
          </select>
          {errors.year && <MemoizedErrorAlert />}
        </label>
        <MemoizedSubmitButton text='Calculate...' />
      </form>
      {!!income && <MemoizedIncome income={income} />}
    </div>
  );
};

export default Calculator;
