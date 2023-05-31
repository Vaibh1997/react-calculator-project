import React, { useState } from "react";

const LoanCalculator = () => {
  const [principleAmount, setPrincipleAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [loanEmi, setLoanEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handlePrincipleAmountChange = (event) => {
    setPrincipleAmount(Number(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(Number(event.target.value));
  };

  const handleLoanTenureChange = (event) => {
    setLoanTenure(Number(event.target.value));
  };

  const calculateLoanEMI = () => {
    const rate = interestRate / 1200; // monthly interest rate
    const tenure = loanTenure * 12; // loan tenure in months
    const emi =
      (principleAmount * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);
    setLoanEmi(emi.toFixed(2));

    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - principleAmount;
    setTotalInterest(Math.round(totalInterest));
  };

  return (
    <div>
      <h2>Home Loan Calculator</h2>
      <div>
        <label>Principle Amount:</label>
        <input
          type="number"
          value={principleAmount}
          onChange={handlePrincipleAmountChange}
        />
      </div>
      <div>
        <label>Interest Rate (per annum):</label>
        <input
          type="number"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <label>Loan Tenure (in years):</label>
        <input
          type="number"
          value={loanTenure}
          onChange={handleLoanTenureChange}
        />
      </div>
      <button onClick={calculateLoanEMI}>Calculate</button>
      {loanEmi > 0 && totalInterest > 0 && (
        <div>
          <h3>EMI: {loanEmi}</h3>
          <h3>Total Interest Payable: {totalInterest}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
