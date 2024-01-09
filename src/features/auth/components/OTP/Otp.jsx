import React, { useRef } from "react";
import styles from './otp.module.scss';


const Otp = (props) => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }

    if (value.length > 1) {
      return;
    }

    props.setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (index < inputRefs.current.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && props.otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="text-center mb-32">
        <div className={StyleSheet.otp_container}>
          {props.otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              value={digit}
              maxLength={1}
              className={`${styles.otp_box} Input`}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputMode="numeric"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Otp;