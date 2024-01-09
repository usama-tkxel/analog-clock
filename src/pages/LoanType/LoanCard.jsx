import React from 'react';
import styles from './LoanCard.module.scss';

export const LoanCard = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-xl-3'>
      <div className={`${styles.card_wrapper} d-flex flex-column align-items-center justify-content-between`}>
        <div className='d-flex justify-content-center'>
          <div className={`${styles.card_img} mb-3`}>
          </div>
        </div>
        <h5 className='text-xsm mb-3'>{props.card_heading}</h5>
        <div className={styles.card_line}></div>
        <div className={styles.card_line_sm}></div>
      </div>
    </div>
  )
}
