import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Stepper } from "../../Components/Stepper/Stepper";
import stepperStyle from "../../Components/Stepper/Stepper.module.scss";
import { Header } from "../../components/Header/Header";
import { LoanCard } from "./LoanCard";
import styles from "./LoanType.module.scss";

let stepperData = [
  {
    id: 1,
    title: "Loan Type",
  },
  {
    id: 2,
    title: "Borrower",
  },
  {
    id: 3,
    title: "Property",
  },
  {
    id: 4,
    title: "Loan Request",
  },
  {
    id: 5,
    title: "Account Executive",
  },
];

const stepper = stepperData.map((item) => {
  return (
    <Stepper
      key={item.id}
      stepperText={item.title}
      class={
        item.id == 1
          ? stepperStyle.visitedStep
          : item.id == 2 && stepperStyle.activeStep
      }
    />
  );
});

let LoanCardData = [
  {
    id: 1,
    title: "Permanent Financing",
  },
  {
    id: 2,
    title: "Bridge Loans",
  },
  {
    id: 3,
    title: "Rehab Loans",
  },
  {
    id: 4,
    title: "New Construction Loans",
  },
];

const loanCard = LoanCardData.map((item) => {
  return <LoanCard key={item.id} card_heading={item.title} />;
});

export const LoanType = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="main-container">
          <div className="col-lg-8 col-md-10 ms-auto me-auto">
            <div className="">
              <h2 className="mb-2 mt-5 color-black900">Loan Application</h2>
              <p>Follow the simple 5 steps to complete your loan application</p>
              <p className="step_count text-xsm color-black900 mb-4 mt-32">
                STEP 1/5
              </p>
              <div className={`${styles.stepper_gap} d-flex flex-wrap mb-4`}>
                {stepper}
              </div>
              <h3 className="mb-4">What type of loan you’re looking for?</h3>
              {/* tabs-area--- */}
              <div className={styles.tabs_area}>
                <Tabs
                  defaultActiveKey="purchase"
                  id="justify-tab-example"
                  className={`${styles.loantypeTabs} mb-4 `}
                  justify
                >
                  <Tab eventKey="purchase" title="Purchase">
                    <div className="row gy-4">{loanCard}</div>
                  </Tab>
                  <Tab eventKey="refinancing" title="Refinancing">
                    <div className="row gy-4">{loanCard}</div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};
