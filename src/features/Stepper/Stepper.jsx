import React from 'react';
import styles from './Stepper.module.scss';

export const Stepper = (props) => {
    return (
        <div>
            <div className={`${styles.stepper_wrapper} ${props.class}`}></div>
            <p className='mt-3 text-xsm color-black500'>{props.stepperText}</p>
        </div>
    )
}
