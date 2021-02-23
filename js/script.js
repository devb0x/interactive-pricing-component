const number_span = document.querySelector('.userChoice');
const slider_input = document.getElementById('viewNumber');
const price_div = document.querySelector('.price');

const billing_div = document.querySelector('input[type=checkbox]');

const pageViews = [
  '10K', '50K', '100K', '500K', '1M'
];

const prices = [
  8.00, 12.00, 16.00, 24.00, 36.00
];

let billingDiscount = true;
let discountPrice = prices[slider_input.value] - prices[slider_input.value] * (25/100);

number_span.innerHTML = pageViews[slider_input.value];
price_div.innerHTML = '$' + `${discountPrice.toLocaleString('en-Gb',({minimumFractionDigits: 2}))}`;
renderPrice();

slider_input.addEventListener('change', () => {
  renderPrice();
})

billing_div.addEventListener('click', (e) => {
  billingDiscount = billingDiscount === false;
  renderPrice();
});

function renderPrice () {
  let discountPrice = prices[slider_input.value] - prices[slider_input.value] * (25/100);
  number_span.innerHTML = pageViews[slider_input.value];
  if (billingDiscount === true) {
    price_div.innerHTML = '$' + `${discountPrice.toLocaleString('en-Gb',({minimumFractionDigits: 2}))}`;
  } else {
    price_div.innerHTML = '$' + prices[slider_input.value].toLocaleString('en-Gb',({minimumFractionDigits: 2}));
  }

  const span = document.createElement('span');
  span.innerHTML = ' / month';
  price_div.appendChild(span);
}
