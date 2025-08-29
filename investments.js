// src/util/investments.js

// Currency formatter (make sure this line is included!)
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Investment calculation function
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i + 1,
      valueEndOfYear: investmentValue,
      interest: interestEarnedInYear,
      annualInvestment: annualInvestment,
    });
  }

  return annualData;
}
