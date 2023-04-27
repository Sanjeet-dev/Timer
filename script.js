const btn = document.querySelector('#btn');
const output = document.querySelector('.output');


btn.addEventListener('click', e => {
    const number = parseInt(document.querySelector('.number').value);
    if (isNaN(number) || number < 1 || number > 9) {
        output.textContent = '0';
    }
    else {
        let count = 1;
        const intervalId = setInterval(function () {
            output.textContent = count;
            count++;
            if (count > number) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

})