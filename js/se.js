//variavel da comunição do buscador
const searc = document.getElementById('buscar')

//função de printar/aplicador no html a recepção da nome digitado

const drawSuperHero = element => {

    const HERO = Heroesd;
    const Heroesd = document.querySelector('#person4');
    jsonParsed.data.results.forEach(element => {
        const heroImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const Herot = element.name
        createHero(heroImage, Herot, Heroesd);
    })
    content.insertAdjacentHTML('beforeend', HERO)
}

//função receptora das variáveis do buscador

const searhHero = name => {
    const HERO = encodeURIComponent(name)
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${HERO}&apikey=${apiKey}&ts=${timeStamp}&hash=${md5}`)
        .then(response => response.json)
        .then(response => {
            response.data.results.forEach(element => {
                drawSuperHero(element)
            })
        })
        .catch(err => console.log(err))
}