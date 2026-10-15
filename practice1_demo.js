const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
const CelciusToFarenheit = celsius => (celsius * 9/5) + 32;
let celsius = fahrenheitToCelsius(fahrenheit);

// 1. Select the button and the table body
const addRowBtn = document.getElementById('addRowBtn');
const tableBody = document.getElementById('table-body');

// 2. Listen for a click event on the button
addRowBtn.addEventListener('click', () => {
    // Create a new <tr> (table row) element
    const newRow = document.createElement('tr');

    // Create the two <td> (table data) cells
    const celsiusCell = document.createElement('td');
    const fahrenheitCell = document.createElement('td');

    // Add some sample text content to the cells
    celsiusCell.textContent = prompt("Enter temperature...");
    fahrenheitCell.textContent = '77°F';

    // Append the cells into the new row
    newRow.appendChild(celsiusCell);
    newRow.appendChild(fahrenheitCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});


