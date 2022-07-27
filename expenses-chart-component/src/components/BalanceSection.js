import { useStore } from '../store/index.js'
import logo from '../assets/images/logo.svg'

export default function BalanceSection() {
  const balance = useStore((state) => state.balance)

  return (
    <section className="ff-sans font-normal h-24 bg-soft-red text-white text-start w-full rounded-lg flex items-center justify-between px-6 max-w-md">
      <div>
        <h6 className="text-sm tracking-tighter mb-1">My balance</h6>
        <p className="font-semibold text-2xl tracking-tight">${balance}</p>
      </div>
      <img src={logo} alt="logo" className="h-2/5"/>
    </section>
  )
}