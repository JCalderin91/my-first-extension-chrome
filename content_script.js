let body = document.getElementsByTagName("body")[0];
const dolarPrice = 24.2;
let amounts = [
  ...body.innerHTML.matchAll(
    /Bs\. &nbsp;((\d)*)+([\.]\d{1,3})*(([\,]\d{1,2})?)/g
  ),
].map((price) => {
  return price[0].slice(10, price[0].length);
});

let newBody = body.innerHTML;
let dolar;

const amountsSet = new Set(amounts);

amounts = [...amountsSet];

amounts.forEach((amount) => {
  dolar = (
    Number(amount.replaceAll(".", "").replace(",", ".")) / dolarPrice
  ).toFixed(2);
  newBody = newBody.replaceAll(
    amount,
    `${amount} <span class='dolar-amount'>$ ${dolar}</span>`
  );
});

body.innerHTML = newBody;
