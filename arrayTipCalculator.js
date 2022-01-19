const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52]
const tips = []
const totals = []
let sum = 0


for (i = 0; i <= bills.length - 1; i++) {
    const calcTip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2

    tips.push(calcTip)
    totals.push(calcTip + bills[i])

    sum = sum + totals[i]

}
console.log("Tips:", tips)
console.log("Total bill:", totals)
const calcAverage = (arr) => arr / bills.length
console.log("The average bill is " + calcAverage(sum))
calcAverage(sum)





