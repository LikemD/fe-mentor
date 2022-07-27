import { useStore } from '../store/index.js'
import DailyExpenseBar from './DailyExpenseBar.js';
import MonthlyTotalSection from './MonthlyTotalSection.js';

export default function ChartSection() {
  const listOfDailyExpenditure = useStore((state) => state.listOfDailyExpenditure)
  const totalSpending = useStore((state) => state.getTotalSpending())
  const getIndexOfHighestSpending = useStore((state) => state.getIndexOfHighestSpending())
  const maxBarHeight = '600'
  
  const calculateBarHeight = (dayAmount, totalAmount) => {
    return dayAmount / totalAmount * maxBarHeight
  }

  const getBarColor = (index) => {
    if (index === getIndexOfHighestSpending) {
      return 'hsl(186, 34%, 60%)'
    } else {
      return 'hsl(10, 79%, 65%)'
    }
  }

  return (
    <section className="ff-sans font-normal h-fit bg-pale-orange text-dark-brown text-start w-full rounded-lg flex flex-col px-4 md:px-6 py-6 mt-4 max-w-md">
      <h1 className="font-semibold text-2xl mb-2">Spending - Last 7 days</h1>
      <div className="flex justify-between">
        {listOfDailyExpenditure.map((dayBalance, index) => (
         <DailyExpenseBar height={calculateBarHeight(dayBalance.amount, totalSpending)} color={getBarColor(index)} day={dayBalance.day} amount={dayBalance.amount} key={index} />)
        )}
      </div>
      <hr className="w-full border border-cream my-6" />
      <MonthlyTotalSection />
    </section>
  )
}