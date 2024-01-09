import React from 'react';
import { Button } from '../Button/Button';
import styles from './Footer.module.scss';


export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
        <div className="main-container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <Button btnClass="d_btn d_btn_white me-3" btnText="Save and Exit" />
                    <div className="d-flex align-items-center">
                        <span className='d-inline-flex'>
                            <img src="../../src/assets/images/exclamation.svg" alt="Exclamation Icon" />
                        </span>
                        <p className='ms-1 text-xxsm color-black500'>If the application is inactive for 7 days, It will be removed</p>
                    </div>
                </div>
                <div>
                    <Button btnClass="d_btn d_btn_ash me-3" btnText="Prev" />
                    <Button btnClass="d_btn d_btn_dark" btnText="Next" />
                </div>
            </div>
        </div>
    </footer>
  )
}
