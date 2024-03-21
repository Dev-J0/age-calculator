const handleSubmit = (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('insert-day').value, 10);
    const month = parseInt(document.getElementById('insert-month').value, 10);
    const year = parseInt(document.getElementById('insert-year').value, 10);


    const isValidDate = validateDate(day, month, year);

    if (!isValidDate) {
        document.getElementById('error').innerText = 'Invalid date'
        console.log("error");
    } else {

        document.getElementById('error').innerText = '';
        console.log('Submitted');
    }
};

const validateDate = (day, month, year) => {
    if (month < 1 || month > 12) {
        return false;
    }
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        return false;
    }
    if (year < 1910 || year > 2024) {
        return false;
    }
    return true;
};

    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);
