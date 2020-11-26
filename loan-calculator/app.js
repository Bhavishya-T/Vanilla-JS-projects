document.getElementById('loan-form').addEventListener('submit', show);
function show(e){
    const im = document.getElementById('loader');
    im.firstElementChild.style.display="block";
    setTimeout(calculateResults, 3000);
    e.preventDefault();
}
function calculateResults(e){
  
  const amt = document.getElementById('amount');
  const int = document.getElementById('interest');
  const years = document.getElementById('years');
  const mpay = document.getElementById('monthly-payment');
  const tpay = document.getElementById('total-payment');
  const tint = document.getElementById('total-interest');

  const principal = parseFloat(amt.value);
  const calculatedInterest = parseFloat(int.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    const im = document.getElementById('loader');
    im.firstElementChild.style.display="none";
    document.getElementById('results').style.display='block';
    mpay.value = monthly.toFixed(2);
    tpay.value = (monthly * calculatedPayments).toFixed(2);
    tint.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
    showError('Please check your numbers');
    const im = document.getElementById('loader');
    im.firstElementChild.style.display="none";
  }

  e.preventDefault();
}

function showError(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const head = document.querySelector('.heading');
    card.insertBefore(errorDiv, head);

    setTimeout(clearerr, 2500);
}
function clearerr(){
    document.querySelector('.alert').remove();
}

