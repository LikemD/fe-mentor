export default function DailyExpenseBar(props) {
  const { day, amount, height, color } = props

  const styles = {height: height, 'backgroundColor': color}
  const displayAmount = () => {
    const popup = document.querySelector(`.amount-popup${day}`)
    const bar = document.querySelector(`.amount-bar${day}`)

    popup.style.display = 'block'
    popup.style.marginBottom = (styles.height + 36).toString() + 'px';
    bar.style.opacity = '0.5'
  }

  const hideAmount = () => {
    const popup = document.querySelector(`.amount-popup${day}`)
    const bar = document.querySelector(`.amount-bar${day}`)

    popup.style.display = 'none'
    bar.style.opacity = '1'
  }


  return (
    <div className="w-8 sm:w-10 h-52 ff-sans flex flex-col-reverse">

      <h5 className="w-full text-center text-xs text-medium-brown">{day}</h5>
      <div className={`w-full relative mb-1 rounded amount-bar${day}`} style={styles} onMouseOver={displayAmount} onMouseLeave={hideAmount}>
      </div>
      <div className={`amount-popup${day} rounded bg-dark-brown absolute top z-50 -ml-1 text-white font-semibold text-xs text-center py-1 px-1`} style={{display: 'none'}} >${amount}</div>
    </div>
  )
}