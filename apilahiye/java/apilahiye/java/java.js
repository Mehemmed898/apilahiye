const rub1 = document.getElementById('rub1')
const usd1 = document.getElementById('usd1')
const eur1 = document.getElementById('eur1')
const gbp1 = document.getElementById('gbp1')
let input1 = document.getElementById('input1')
let p1 = document.getElementById('p1')

const rub2 = document.getElementById('rub2')
const usd2 = document.getElementById('usd2')
const eur2 = document.getElementById('eur2')
const gbp2 = document.getElementById('gbp2')
let input2 = document.getElementById('input2')
let p2 = document.getElementById('p2')


rub1.addEventListener('click', changeActive)
usd1.addEventListener('click', changeActive)
eur1.addEventListener('click', changeActive)
gbp1.addEventListener('click', changeActive)

rub2.addEventListener('click', changeActive)
usd2.addEventListener('click', changeActive)
eur2.addEventListener('click', changeActive)
gbp2.addEventListener('click', changeActive)



function changeActive(e) {
    if (e.target.className === "currency-item") {
        const currencies = [...e.target.parentElement.children];
        currencies.forEach(el => {

            if (el.classList.contains("active")) {
                el.classList.remove("active")
            }
        })
        e.target.classList.add("active");
    }


    // RUB
    if (rub1.classList.contains("active") && rub2.classList.contains("active")) {

        p1.innerText = `1 RUB = 1 RUB`
        input2.value = input1.value
        p2.innerText = `1 RUB = 1 RUB`

    }

    if (rub1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 RUB = ${data.rates.USD} USD`
                input2.value = input1.value * data.rates.USD

            })

        fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 USD = ${data.rates.RUB} RUB`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })

    }


    if (rub1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 RUB = ${data.rates.EUR} EUR`
                input2.value = input1.value * data.rates.EUR

            })
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 EUR = ${data.rates.RUB} RUB`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })

    }



    if (rub1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 RUB = ${data.rates.GBP} GBP`
                input2.value = input1.value * data.rates.GBP

            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 GBP = ${data.rates.RUB} RUB`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }

    // USD
    if (usd1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 USD = ${data.rates.RUB} RUB`
                input2.value = input1.value * data.rates.RUB

            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 RUB = ${data.rates.USD} USD`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (usd1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 USD = ${data.rates.GBP} GBP`
                input2.value = input1.value * data.rates.GBP

            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 GBP = ${data.rates.USD} USD`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (usd1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 USD = ${data.rates.EUR} EUR`
                input2.value = input1.value * data.rates.EUR

            })
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 EUR = ${data.rates.USD} USD`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (usd1.classList.contains("active") && usd2.classList.contains("active")) {

        p1.innerText = `1 USD = 1 USD`
        input2.value = input1.value
        p2.innerText = `1 USD = 1 USD`

    }

    // EUR
    if (eur1.classList.contains("active") && eur2.classList.contains("active")) {

        p1.innerText = `1 EUR = 1 EUR`
        input2.value = input1.value
        p2.innerText = `1 EUR = 1 EUR`

    }

    if (eur1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 EUR = ${data.rates.RUB} RUB`
                input2.value = input1.value * data.rates.RUB
            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 RUB = ${data.rates.EUR} EUR`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (eur1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 EUR = ${data.rates.USD} USD`
                input2.value = input1.value * data.rates.USD
            })
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 USD = ${data.rates.EUR} EUR`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (eur1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 EUR = ${data.rates.GBP} GBP`
                input2.value = input1.value * data.rates.GBP
            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 GBP = ${data.rates.EUR} EUR`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }

    // GBP
    if (gbp1.classList.contains("active") && gbp2.classList.contains("active")) {

        p1.innerText = `1 GBP = 1 GBP`
        input2.value = input1.value
        p2.innerText = `1 GBP = 1 GBP`

    }
    if (gbp1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 GBP = ${data.rates.RUB} RUB`
                input2.value = input1.value * data.rates.RUB
            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 RUB = ${data.rates.GBP} GBP`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    } if (gbp1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 GBP = ${data.rates.USD} USD`
                input2.value = input1.value * data.rates.USD
            })
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 USD = ${data.rates.GBP} GBP`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }
    if (gbp1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                p1.innerText = `1 GBP = ${data.rates.EUR} EUR`
                input2.value = input1.value * data.rates.EUR
            })
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 EUR = ${data.rates.GBP} GBP`
            })
            .catch(error => {
                error = "Произошла ошибка"
                alert(error);
            })
    }

}



