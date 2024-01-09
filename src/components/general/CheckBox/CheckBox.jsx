import React from 'react'
import styles from './CheckBox.module.scss';



export const CheckBox = (props) => {
    return (
        <div>
            <div className={`${styles.checkBox_wrapper} d-flex align-items-center `}>
                <input type="checkbox" id="defaultcheck" className={`${styles.checkBox} me-2`} />
                <label htmlFor="defaultcheck">{props.checkLabel}</label>
            </div>
        </div>
    )
}