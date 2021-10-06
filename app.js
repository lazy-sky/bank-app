// const transactionContainer = document.getElementsByClassName('transaction-container')[0];
const transactionList = document.getElementsByClassName('transaction-list')[0];

transactionList.innerHTML = '';

// TODO:
// 1. separating functions
// 2. separating module, api

let prevDate = '';
let todaySum = 0;

async function fetchData() {
  const url = 'https://syoon0624.github.io/json/test.json';
  const response = await fetch(url);
  const data = await response.json();
  const { bankList } = data;

  bankList.reverse();

  bankList.forEach((transaction) => {
    const {
      date,
      income,
      history,
    } = transaction;

    let { price } = transaction;

    // when date changes
    if (date !== prevDate) {
      if (todaySum < 0) {
        todaySum *= -1;
        todaySum = `${todaySum.toLocaleString()}원 수입`;
      } else {
        todaySum = `${todaySum.toLocaleString()}원 지출`;
      }

      transactionList.innerHTML += `
      <div class="transaction-day-summary">
        <p class="transaction-day-title">${date}</p>
        <p class="transaction-day-amount">${todaySum}</p>
      </div>
      `;

      todaySum = 0;
    }

    if (income === 'in') {
      todaySum -= price;
      price = `+${price.toLocaleString()}`;

      transactionList.innerHTML += `
      <li class="transaction-item">
        <p class="transaction-item-name">${history}</p>
        <p class="transaction-item-price income">${price}</p>
      </li>`;
    }

    if (income === 'out') {
      todaySum += price;
      price = price.toLocaleString();

      transactionList.innerHTML += `
      <li class="transaction-item">
        <p class="transaction-item-name">${history}</p>
        <p class="transaction-item-price">${price}</p>
      </li>`;
    }

    transactionList.innerHTML += '<hr>';

    prevDate = date;
  });

  return bankList;
}

fetchData();

// function parseBankData(data) {
//   data = Array(data);

//   const parsedBankList = {
//     'dates': [],
//     'incomes': [],
//     'classifies': [],
//     'histories': [],
//     'prices': [],
//   }

//   const { dates, incomes, classifies, histories, prices } = parsedBankList;

//   data.forEach((transaction) => {
//     const { date, income, classify, history, price } = transaction;

//     dates.push(date);
//     incomes.push(income);
//     classifies.push(classify);
//     histories.push(history);
//     prices.push(price);
//   })

//   return parsedBankList;
// }

// const bankData = fetchData();
// const parsedBankData = parseBankData(bankData);
// console.log(parsedBankData)
// parsedBankData.forEach((data) => {
//   transactionList.innerHTML += `
//   <li class="transaction-item">
//     <p class="transaction-item-name">${history}</p>
//     <p class="transaction-item-price">${price}</p>
//   </li>`;
// });
