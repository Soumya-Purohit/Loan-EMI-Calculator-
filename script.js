// Real-time Percentage Calculations
function calculatePercentageOf() {
    const percent = parseFloat(document.getElementById('percentOf').value);
    const number = parseFloat(document.getElementById('numberY').value);
    if (!isNaN(percent) && !isNaN(number)) {
        const result = (percent / 100) * number;
        document.getElementById('result1').textContent = result.toLocaleString();
    }
}

// Profit Margin Calculator
function calculateProfitMargin() {
    const cost = parseFloat(document.getElementById('costPrice').value);
    const sell = parseFloat(document.getElementById('sellPrice').value);
    if (cost && sell && sell > cost) {
        const margin = ((sell - cost) / sell) * 100;
        document.getElementById('profitMarginResult').textContent = 
            `${margin.toFixed(2)}%`;
    }
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Dynamic Content Loading
function loadContent(page) {
    fetch(`/pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.content').innerHTML = html;
            initTools();
        });
}

// QR Code Generator
function generateQR() {
    const text = document.getElementById('qrInput').value;
    QRCode.toCanvas(document.getElementById('qrOutput'), text, error => {
        if (error) console.error(error);
    });
}

// Initialize all tool event listeners
function initTools() {
    // Add input event listeners to all calculator fields
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', performCalculations);
    });
}
