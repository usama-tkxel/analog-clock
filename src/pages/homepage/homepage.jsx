import { Button } from "../../components/general/Button/Button";
import { CheckBox } from "../../components/general/CheckBox/CheckBox";
import { Input } from "../../components/general/Input/Input";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <section className={styles.hero_wrapper}>
        <div className="main-container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="mb-3 mainh1">
                Find the perfect loan for your commercial real estate
              </h1>
              <p className="mb-5">
                Our lenders are still lending, and we will work hard to get you
                the funding you need.{" "}
              </p>
              <div className={styles.form_wrapper}>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  name="your name"
                  inputClass="Input mb-3"
                />
                <Input
                  label="Email"
                  placeholder="e.g abc@example.com"
                  type="email"
                  name="email"
                  inputClass="Input mb-3"
                />
                <CheckBox checkLabel={"Save information for later"} />
                <Button
                  btnText="Apply For Loan"
                  btnClass="d_btn d_btn_dark mt-4 font-weight-500"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="d-flex justify-content-center align-items-center black100-background h-100 br-2">
                To Be Design
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
