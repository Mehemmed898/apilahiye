const rub1 = document.getElementById('pul1')
const usd1 = document.getElementById('pul2')
const eur1 = document.getElementById('pul3')
const gbp1 = document.getElementById('pul4')
let input1 = document.getElementById('.div4')
let p1 = document.getElementById('.div5')

const rub2 = document.getElementById('pul5')
const usd2 = document.getElementById('pul6')
const eur2 = document.getElementById('pul7')
const gbp2 = document.getElementById('pul8')
let input2 = document.getElementById('.input1')
let p2 = document.getElementById('.pson1')


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
    }}
changeActive()

    RUB
    if (rub1.classList.contains("active") && rub2.classList.contains("active")) {

        p1.innerText = `1 RUB = 1 RUB`
        input2.value = input1.value
        p2.innerText = `1 RUB = 1 RUB`

    }

    if (rub1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
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
    }

}