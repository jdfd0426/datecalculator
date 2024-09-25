function convertFromDays() {
    const daysInput = document.getElementById('days');
    const monthsInput = document.getElementById('months');
    const yearsInput = document.getElementById('years');
    const resultDate = document.getElementById('resultDate');

    const days = parseInt(daysInput.value);
    if (!isNaN(days)) {
        const years = days / 365;
        const months = days / 30.42;

        yearsInput.value = years.toFixed(1); // Show only 1 decimal place
        monthsInput.value = Math.round(months); // Round to whole number
        daysInput.value = Math.round(days); // Ensure whole number is displayed in days

        // Calculate and display future date
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        resultDate.textContent = currentDate.toDateString(); // Only show the date
    } else {
        monthsInput.value = '';
        yearsInput.value = '';
        resultDate.textContent = '';
    }
}

function convertFromMonths() {
    const daysInput = document.getElementById('days');
    const monthsInput = document.getElementById('months');
    const yearsInput = document.getElementById('years');
    const resultDate = document.getElementById('resultDate');

    const months = parseInt(monthsInput.value);
    if (!isNaN(months)) {
        const years = months / 12;
        const days = months * 30.42;

        yearsInput.value = years.toFixed(1); // Show only 1 decimal place
        daysInput.value = Math.round(days); // Round to whole number
        monthsInput.value = Math.round(months); // Ensure whole number in months

        // Calculate and display future date
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + months);
        resultDate.textContent = currentDate.toDateString(); // Only show the date
    } else {
        daysInput.value = '';
        yearsInput.value = '';
        resultDate.textContent = '';
    }
}

function convertFromYears() {
    const daysInput = document.getElementById('days');
    const monthsInput = document.getElementById('months');
    const yearsInput = document.getElementById('years');
    const resultDate = document.getElementById('resultDate');

    const years = parseFloat(yearsInput.value);
    if (!isNaN(years)) {
        const months = years * 12;
        const days = years * 365;

        monthsInput.value = Math.round(months); // Round to whole number
        daysInput.value = Math.round(days); // Round to whole number
        yearsInput.value = years.toFixed(1); // Show only 1 decimal place

        // Calculate and display future date
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() + years);
        resultDate.textContent = currentDate.toDateString(); // Only show the date
    } else {
        daysInput.value = '';
        monthsInput.value = '';
        resultDate.textContent = '';
    }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('days').addEventListener('input', convertFromDays);
    document.getElementById('months').addEventListener('input', convertFromMonths);
    document.getElementById('years').addEventListener('input', convertFromYears);
});
