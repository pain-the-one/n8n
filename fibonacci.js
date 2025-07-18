function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function generateFibonacciTable() {
  const tableBody = document.getElementById('fibonacci-body');
  for (let i = 1; i <= 100; i++) {
    const row = document.createElement('tr');
    const nCell = document.createElement('td');
    nCell.textContent = i;
    const fibCell = document.createElement('td');
    fibCell.textContent = fibonacci(i);
    row.appendChild(nCell);
    row.appendChild(fibCell);
    tableBody.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', generateFibonacciTable);