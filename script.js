document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const fibNumberInput = document.getElementById('fib-number');
    const fibBody = document.getElementById('fib-body');

    function generateFibonacci(n) {
        let sequence = [0, 1];
        if (n <= 0) {
            return [];
        }
        if (n === 1) {
            return [0];
        }
        while (sequence.length < n) {
            let nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            sequence.push(nextVal);
        }
        return sequence;
    }

    function displayFibonacci(count) {
        const numbers = generateFibonacci(count);
        fibBody.innerHTML = ''; // Clear previous results
        numbers.forEach((num, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index}</td>
                <td>${num}</td>
            `;
            fibBody.appendChild(row);
        });
    }

    generateBtn.addEventListener('click', () => {
        const num = parseInt(fibNumberInput.value, 10);
        if (!isNaN(num) && num > 0 && num <= 100) {
            displayFibonacci(num);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });

    // Initial display
    displayFibonacci(10);
});
