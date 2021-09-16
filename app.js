const transactionList = document.getElementsByClassName('transaction-list')[0];

transactionList.innerHTML = ``;

// TODO: 
// 1. separating functions
// 2. separating module, api


// 어려운 부분 1. 비동기를 끼고 기능 분리하는 게 얼른 생각나지 않는다. 졸려서 그런가.
// 2. 최근에 리액트를 연습하고 있어서 jsx 문법을 쓰지 않고 컴포넌트를 구성하는 것이 어색했다.
// 3. 어려운 부분이라기보단 라이브러리 사용법대로 제대로 쓴 거 같은데 의도한대로 안나오는 거.
// 4. 무엇보다 충분한 시간 투자를 하지 못해 세 파트 모두 무어라 말하기 애매하다.

async function fetchData() {
  const url = 'https://syoon0624.github.io/json/test.json';
  const response = await fetch(url);
  const data = await response.json();
  const { bankList } = data;

  bankList.forEach((transaction) => {
    let { 
      date, 
      income, 
      classify, 
      history, 
      price } = transaction;

      let prevDate = '';

      price = price.toLocaleString();

      if (income === 'in') {
        price = `+${price}`;
      }

      // when date changes
      if(date !== prevDate) {
        transactionList.innerHTML += `<hr>`
      }
  
      transactionList.innerHTML += `
        <li class="transaction-item">
          <p class="transaction-item-name">${history}</p>
          <p class="transaction-item-price">${price}</p>
        </li>`;

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

