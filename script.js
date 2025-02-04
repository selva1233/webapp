// Calculator Functions
function appendToInput(value) {
    document.getElementById('calcInput').value += value;
}

function clearInput() {
    document.getElementById('calcInput').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('calcInput').value);
        document.getElementById('calcInput').value = result;
    } catch (error) {
        document.getElementById('calcInput').value = 'Error';
    }
}

// Currency Converter Functions
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === 'success') {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'Error fetching exchange rates';
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error converting currency';
    }
}