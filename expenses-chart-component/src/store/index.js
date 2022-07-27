import create from 'zustand'

export const useStore = create((_set, get) => ({
  count: 2,
  balance: 921.48,
  listOfDailyExpenditure: [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ],
  getTotalSpending: () => {
    return get().listOfDailyExpenditure.reduce((acc, curr) => {
      return acc + curr.amount
    }, 0)
  },

  getIndexOfHighestSpending: () => {
    const highestExpenditure = get().listOfDailyExpenditure.reduce((acc, curr) => {
      return acc.amount > curr.amount ? acc : curr
    }, {amount: 0})

    return get().listOfDailyExpenditure.indexOf(highestExpenditure)
  }

}))