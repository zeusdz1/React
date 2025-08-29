import React, { useState, useMemo } from "react";
import Header from './components/Header';
import { jsPDF } from "jspdf";

// Investment calculation logic
function calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investedCap = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear;
    investedCap += annualInvestment;
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      totalInterest,
      investedCap,
      annualInvestment,
    });
  }
  return annualData;
}

// PDF generation
function generatePDF(data) {
  const doc = new jsPDF();
  doc.setFontSize(20);
  doc.text("Investment Report", 10, 10);
  doc.setFontSize(12);
  doc.text(`Initial Investment: ${data.initialInvestment}`, 10, 30);
  doc.text(`Annual Investment: ${data.annualInvestment}`, 10, 40);
  doc.text(`Expected Return: ${data.expectedReturn}%`, 10, 50);
  doc.text(`Duration: ${data.duration} years`, 10, 60);

  let yOffset = 80;
  const lineSpacing = 10;
  const pageHeight = doc.internal.pageSize.height;

  data.results.forEach((result) => {
    if (yOffset + 50 > pageHeight) {
      doc.addPage();
      yOffset = 20;
    }
    doc.text(`Year: ${result.year}`, 10, yOffset);
    doc.text(`Interest (Year): ${result.interest.toFixed(2)}`, 10, yOffset + lineSpacing);
    doc.text(`Total Interest: ${result.totalInterest.toFixed(2)}`, 10, yOffset + 2 * lineSpacing);
    doc.text(`Invested Capital: ${result.investedCap.toFixed(2)}`, 10, yOffset + 3 * lineSpacing);
    doc.text(`Total Value: ${result.valueEndOfYear.toFixed(2)}`, 10, yOffset + 4 * lineSpacing);
    yOffset += 60;
  });

  doc.save("Investment_Report.pdf");
}

function App() {
  const [inputCustomer, setInputCustomer] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const numberValue = Number(value);
    if (numberValue < 0) return; // Prevent negative values

    setInputCustomer((prev) => ({
      ...prev,
      [name]: numberValue,
    }));

    if (numberValue >= 0 && name === "duration" && numberValue >= 1) {
      setError("");
    }
  };

  const handleCalculate = () => {
    if (
      !inputCustomer.initialInvestment &&
      !inputCustomer.annualInvestment &&
      !inputCustomer.expectedReturn &&
      !inputCustomer.duration
    ) {
      setError("Please fill in all input fields.");
      return;
    }

    if (inputCustomer.duration < 1) {
      setError("Duration must be at least 1 year.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      const calcResults = calculateInvestmentResults(inputCustomer);
      setResults(calcResults);
      setLoading(false);
    }, 300);
  };

  const handleGeneratePDF = () => {
    if (results) generatePDF({ ...inputCustomer, results });
  };

  const memoizedResults = useMemo(() => results, [results]);

  return (
    <>
      <Header />
      <div className="investment-calculator" style={{ maxWidth: '900px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
        <div className="inputs" style={{ marginBottom: '1rem' }}>
          <input
            type="number"
            name="initialInvestment"
            value={inputCustomer.initialInvestment}
            onChange={handleInputChange}
            placeholder="Initial Investment"
            style={{ margin: '0.5rem', padding: '0.5rem', width: '180px' }}
          />
          <input
            type="number"
            name="annualInvestment"
            value={inputCustomer.annualInvestment}
            onChange={handleInputChange}
            placeholder="Annual Investment"
            style={{ margin: '0.5rem', padding: '0.5rem', width: '180px' }}
          />
          <input
            type="number"
            name="expectedReturn"
            value={inputCustomer.expectedReturn}
            onChange={handleInputChange}
            placeholder="Expected Return (%)"
            style={{ margin: '0.5rem', padding: '0.5rem', width: '180px' }}
          />
          <input
            type="number"
            name="duration"
            value={inputCustomer.duration}
            onChange={handleInputChange}
            placeholder="Duration (years)"
            style={{ margin: '0.5rem', padding: '0.5rem', width: '180px' }}
          />
          <button onClick={handleCalculate} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem', cursor: 'pointer' }}>
            Calculate
          </button>
        </div>

        {error && <p style={{ color: 'red', fontWeight: 'bold', marginTop: '1rem' }}>{error}</p>}
        {loading && <p style={{ color: '#555', fontStyle: 'italic' }}>Calculating...</p>}

        {memoizedResults && !loading && (
          <div className="results" style={{ marginTop: '1rem' }}>
            <h2>Investment Results</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead style={{ backgroundColor: '#34495e', color: 'white' }}>
                <tr>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Year</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Investment Value</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Interest (Year)</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Total Interest</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Invested Capital</th>
                </tr>
              </thead>
              <tbody>
                {memoizedResults.map((year) => (
                  <tr key={year.year} style={{ backgroundColor: year.year % 2 === 0 ? '#f2f2f2' : 'white' }}>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>{year.year}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>${year.valueEndOfYear.toFixed(2)}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>${year.interest.toFixed(2)}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>${year.totalInterest.toFixed(2)}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>${year.investedCap.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleGeneratePDF}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
              }}
            >
              Download PDF Report
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
