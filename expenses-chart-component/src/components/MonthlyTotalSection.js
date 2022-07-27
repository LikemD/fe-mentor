export default function MonthlyTotalSection() {
  return (
    <div className="ff-sans flex justify-between items-center">
      <div>
        <p className="text-medium-brown mb-1">Total this month</p>
        <p className="text-3xl font-semibold text-dark-brown">$478.33</p>
      </div>
      <div className="self-end">
        <p className="text-end font-semibold text-dark-brown -mb-1">+2.4%</p>
        <p className="text-medium-brown">from last month</p>
      </div>
    </div>
  )
}