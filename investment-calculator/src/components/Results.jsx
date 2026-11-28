import { calculateInvestmentResults, formatter } from "../util/Investment.js"

export default function Results({ inputValues }) {
    const investmentResults = calculateInvestmentResults(inputValues)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map((yearData) => {
                    const totalInterest = investmentResults.slice(0, yearData.year).reduce((acc, curr) => acc + curr.interest, 0)
                    const investedCapital = inputValues.initialInvestment + (inputValues.annualInvestment * yearData.year)
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
