// const transactionContainer = document.querySelector('transaction-container');
const transactionList = document.getElementsByClassName('transaction-list')[0];

transactionList.innerHTML = '';

// TODO:
// 1. separating functions
// 2. separating module, api

let prevDate = '';

async function fetchData() {
  const url = 'https://syoon0624.github.io/json/test.json';
  const response = await fetch(url);
  const data = await response.json();
  const { bankList } = data;

  bankList.forEach((transaction) => {
    let {
      date,
      income,
      history,
      price,
    } = transaction;

    if (income === 'in') {
      price = `+${price.toLocaleString()}`;
    }

    // when date changes
    if (date !== prevDate) {
      transactionList.innerHTML += '<hr>';
      transactionList.innerHTML += `
      <li class="transaction-item">
        <p class="transaction-item-name">${history}</p>
        <p class="transaction-item-price income">${price.toLocaleString()}</p>
      </li>`;
    } else {
      transactionList.innerHTML += `
      <li class="transaction-item">
        <p class="transaction-item-name">${history}</p>
        <p class="transaction-item-price">${price.toLocaleString()}</p>
      </li>`;
    }

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
