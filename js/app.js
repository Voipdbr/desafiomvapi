'use strict'

// variables
const PRIVATE_KEY = 'ab14924c03a747bf135c3881254b2e592d631b84'
const PUBLIC_KEY = '710cb9745604f0e0ad835a4c5259b178'
const content = document.getElementById('content')
const search = document.getElementById('buscador')

// funciones
const getConnection = () => {

    const TS = Date.now()
    const HASH = MD5(TS + PRIVATE_KEY + PUBLIC_KEY)
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`

    fetch(URL)
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(element => {
                drawSuperHero(element)
            })
        })
        .catch(err => console.log(err))
}

const drawSuperHero = element => {

    let img = `${element.thumbnail.path}/portrait_uncanny.${element.thumbnail.extension}`
    const HERO = `
        <div class="hero">
            <div class="info">
                <h3>${element.name}</h3>
            </div>
            <img src="${img}">
        </div>
    `
    content.insertAdjacentHTML('beforeend', HERO)
}

const searhHero = name => {

    const TS = Date.now()
    const HASH = MD5(TS + PRIVATE_KEY + PUBLIC_KEY)
    const HERO = encodeURIComponent(name)
    const URL = `http://gateway.marvel.com/v1/public/characters?name=${HERO}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`

    fetch(URL)
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(element => {
                drawSuperHero(element)
            })
        })
        .catch(err => console.log(err))
}

search.addEventListener('keyup', e => {

    e.preventDefault()
    if (e.keyCode === 13) {
        content.innerHTML = ''
        searhHero(e.target.value.trim())
        search.value = ''
    }
})

getConnection()