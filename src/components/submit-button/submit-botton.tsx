import React from 'react'
import { IButtonProps } from '../../types'
import s from './submit-button.module.css'

const SubmitButton: React.FC<IButtonProps>= ({text}) => {
    return <button type='submit' className={s.button}>{text}</button>
}

export const MemoizedSubmitButton = React.memo(SubmitButton)