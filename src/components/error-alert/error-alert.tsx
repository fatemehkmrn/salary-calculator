import React from 'react'
import s from './error-alert.module.css'

const ErrorAlert: React.FC<{}>= () => {
    return <p className={s.alert}>This field is required!</p>
}

export const MemoizedErrorAlert = React.memo(ErrorAlert)