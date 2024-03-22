const handleSubmit = (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('insert-day').value, 10);
    const month = parseInt(document.getElementById('insert-month').value, 10);
    const year = parseInt(document.getElementById('insert-year').value, 10);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();

    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--; 
    }

 
    const yearsElement = document.querySelector('.secondContainer > div:nth-child(1)');
    const monthsElement = document.querySelector('.secondContainer > div:nth-child(2)');
    const daysElement = document.querySelector('.secondContainer > div:nth-child(3)');

    yearsElement.innerText = `${age} years`;

    let remainingMonths = currentMonth - month;
    let remainingDays = currentDay - day;

    if (remainingDays < 0) {
        remainingMonths--; 
        remainingDays += new Date(currentYear, currentMonth, 0).getDate(); 
    }

    monthsElement.innerText = `${remainingMonths} months`;
    daysElement.innerText = `${remainingDays} days`;
};

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
