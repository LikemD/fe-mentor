export default function MonthlyTotalSection() {
  return (
    <div className="ff-sans flex justify-between items-center">
      <div>
        <h4 className="text-medium-brown mb-1">Total this month</h4>
        <h1 className="text-3xl font-semibold text-dark-brown">$478.33</h1>
      </div>
      <div className="self-end">
        <h6 className="text-end font-semibold text-dark-brown -mb-1">+2.4%</h6>
        <h4 className="text-medium-brown">from last month</h4>
      </div>
    </div>
  )
}