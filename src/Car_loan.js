

import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PercentIcon from "@mui/icons-material/Percent";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";


export const Car_loan = () => {
  const [amount, setamount] = useState(400000);
  const [interest, setinterest] = useState(8.5);
  const [tenure, settenure] = useState(5);
  const [loan, setloan] = useState(null);
  const [currentTenureSelection, setCurrentTenureSelection] = useState("year");
  const [interestPayable, setInterestPayable] = useState(null);
  const [totalPayment, settotalPayment] = useState(null);
  const [pieData, setpieData] = useState(null);

  // const common=10000000
  // const ansss=common.toLocaleString()
  // console.log(ansss)

  const  Months = () => {
    if (tenure > 30) {
      settenure(tenure);
    } else {
      settenure(tenure * 12);
    }

    setCurrentTenureSelection("month");
  };
  
  const Year = () => {
   settenure( (tenure / 12).toFixed(1))
   
   
    setCurrentTenureSelection("year");
  };

  

  

  const marks = [
    {
      value: 0,
      label: "0L",
    },
    {
      value: 500000,
      label: "5L",
    },
    {
      value: 1000000,
      label: "10L",
    },
    {
      value: 1500000,
      label: "15L",
    },
    {
      value: 2000000,
      label: "20L",
    }
   
  ];



  function valuetext(value) {
    return `${value}L`;
  }



  useEffect(() => {
    const r = interest / 12 / 100;
    console.log(r);
    // const n = tenure * 12;
    const n = currentTenureSelection === "year" ? tenure * 12 : tenure;
    console.log(n);
    const t = Math.pow(1 + r, n);
    console.log(t / (t - 1));
    const e = amount * r * (t / (t - 1));
    console.log(e);
    setloan(Math.round(e).toLocaleString("en-IN"));
    

    const tenures = currentTenureSelection === "year" ? tenure * 12 : tenure;
    const totalPayments = e * tenures;
    const totalInterests = totalPayments - amount;
  
    

    setInterestPayable(Math.round(totalInterests).toLocaleString("en-IN"));

    const amounts = Number(amount);
    const interestPayables = Number(Math.round(totalInterests));
    console.log(interestPayables)

    const Total_payment = amounts + interestPayables;

    const Total_interest = ((interestPayables / Total_payment) * 100).toFixed(
      1
    );

    setpieData(Total_interest);
    settotalPayment(Math.round(amounts + interestPayables).toLocaleString("en-IN"));

  }, [amount, interest, tenure, interestPayable]);

  console.log(amount, interest, tenure, loan);

  return (
    <div className="calculator">
      <h1 className="heading">EMI Calculator for car Loan</h1>

      <div className="calcy">
        <label>car loan amount</label>
        <input
          // type='number'
          value={amount.toLocaleString("en-IN")}
          onChange={(e) => {
            setamount(e.target.value);
          }}
        ></input>
        <span className="rupee">
          <CurrencyRupeeIcon />
        </span>
      </div>

      <div  className="slider_forall" style={{ width: "700px", margin: "0px 50px" }}>
        <Slider
          aria-label="Always visible"
          value={amount}
          getAriaValueText={valuetext}
          min={0}
          max={2000000}
          step={2}
          marks={marks}
          onChange={(e) => {
            setamount(e.target.value);
          }}
          // valueLabelDisplay="on"
        />
      </div>

      <div className="interest">
        <label>interest rate</label>

        <input
          // type='number'
          value={interest}
          onChange={(e) => {
            setinterest(e.target.value);
          }}
        ></input>
        <span className="percent">
          <PercentIcon />
        </span>
      </div>

     

      <div  className="slider_forall" style={{ width: "700px", margin: "0px 140px" }}>
        <Slider
          aria-label="Always visible"
          value={interest}
          // getAriaValueText={valueintrst}
          min={5}
          max={20}
          onChange={(e, newValue) => {
            setinterest(newValue);
          }}
        />
      </div>

      <div className="tenure">
        <label className="label">loan tenure</label>

        <input
          className="input"
          value={tenure}
          onChange={(e) => {
            settenure(e.target.value);
          }}
        ></input>

        <input
          type="radio"
          name="buttons"
          className="hide"
          id="yr"
          onClick={Year}
          disabled={currentTenureSelection === "year" && true}
          checked
        />
        <label for="yr"   className={currentTenureSelection === "year"? "active":"button"}>
          yr
        </label>
        <input
          type="radio"
          name="buttons"
          className="hide"
          id="mo"
          onClick={Months}
          disabled={currentTenureSelection === "month" && true}
        />
        <label for="mo"  className={currentTenureSelection === "month"? "active_month":"button month"} >
          mo
        </label>
      </div>

     

<div  className="slider_forall" style={{ width: "700px", margin: "0px 140px" }}>
        <Slider
          aria-label="Always visible"
          value={tenure}
          // getAriaValueText={valueintrst}
          min={0}
          max={7}
          onChange={(e, newValue) => {
            settenure(newValue);
          }}
        />
      </div>

      <div className="form_piechart">
        <div className="formulas">
          <label>loan emi</label>
          <h5>
            <CurrencyRupeeIcon />
            {loan==="NaN"? 0:loan}
          </h5>

          <label>total interest payable</label>
          <h5>
            <CurrencyRupeeIcon />
            {interestPayable==="NaN"? 0 : interestPayable}
          </h5>

          <label>
            total payment <br />
            (principle+interest){" "}
          </label>
          <h5>
            <CurrencyRupeeIcon />
            {totalPayment==="NaN"? 0 : totalPayment}
          </h5>
        </div>

        <div className="pieChart">
          <h3>Break-up of Total Payment</h3>
          <PieChart
            style={{ transform: "rotate(-90deg)" }}
            data={[
              { title: Number(100 - pieData), value: Number(100 - pieData), color: "#88A825" },
              { title: Number(pieData), value: Number(pieData), color: "#ED8C2B" },
            ]}
          />

        
      
        </div>
      </div>
      <div className="labels">
          <h5 className="orange">Total Interest</h5>
            <h5 className="green">Principal Loan Amount</h5>
           
          </div>
    </div>
  );
};
