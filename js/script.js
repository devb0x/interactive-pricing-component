// 10K pageviews / \$8 per month
// 50K pageviews / \$12 per month
// 100K pageviews / \$16 per month
// 500k pageviews / \$24 per month
// 1M pageviews / \$36 per month

const number_span = document.querySelector('.userChoice');
const slider_input = document.getElementById('viewNumber');
const price_div = document.querySelector('.price');

// const billing_div = document.querySelector('.switch');
const billing_div = document.getElementById('test');

const pageViews = [
  '10K', '50K', '100K', '500K', '1M'
];

const prices = [
  8.00, 12.00, 16.00, 24.00, 36.00
];

let billingDiscount;

slider_input.addEventListener('change', () => {
  let discountPrice = prices[slider_input.value] - prices[slider_input.value] * (25/100);
  number_span.innerHTML = pageViews[slider_input.value];
  price_div.innerHTML = '$' + `${discountPrice.toLocaleString('en-Gb',({minimumFractionDigits: 2}))}`;
  renderPrice();
})

billing_div.addEventListener('change', (e) => {
  let billingDiscount = event.target.checked;

  if (event.target.checked) {
    return billingDiscount === true;
  }

  console.log('event change');
  return billingDiscount === false;
  // billingDiscount = !billingDiscount;

  if (event.target.checked) {
    return billingDiscount === true
  } else {
    return billingDiscount === false
  }
});

number_span.innerHTML = pageViews[slider_input.value];
price_div.innerHTML = '$' + `${discountPrice.toLocaleString('en-Gb',({minimumFractionDigits: 2}))}`;
renderPrice();


function renderPrice () {
  const span = document.createElement('span');
  span.innerHTML = ' / month';
  price_div.appendChild(span);
}
