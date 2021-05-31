    //variáveis ​​responsáveis ​​pela comunicação com a API da Marvel
    const timeStamp = '1622255521';
    const apiKey = '43b6b6dcc380f778ad8d2b95fb5ea1ce';
    const md5 = '6c7e7ffdc4b58243ab34ac84a70b5190';
    const connec = r1;
    var r1 = 50;

    //executa a função do ver mais no footer
    function clicar() {
        var r2 = 50;
        const getConnection4 = () => {
            fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&ts=${timeStamp}&hash=${md5}&limit=` + r1 + `&offset=` + r2)
                .then((response) => { return response.json(); })
                .then((jsonParsed) => {
                    const Heroesd = document.querySelector('#person4');
                    jsonParsed.data.results.forEach(element => {
                        const heroImage = element.thumbnail.path + '.' + element.thumbnail.extension
                        const Herot = element.name
                        const Herod = element.id
                        createHero(heroImage, Herot, Heroesd, Herod);
                    })
                    console.log(jsonParsed);
                })
                .catch(err => console.log(err))
        }
        getConnection4()
    }

    //funções de carregamento dos personagens Marvel Api
    //Personagens
    const getConnection = () => {
            fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&ts=${timeStamp}&hash=${md5}&limit=` + r1)
                .then((response) => { return response.json(); })
                .then((jsonParsed) => {
                    const Heroesd = document.querySelector('#person');
                    jsonParsed.data.results.forEach(element => {
                        const heroImage = element.thumbnail.path + '.' + element.thumbnail.extension
                        const Herot = element.name
                        const Herod = element.id
                        createHero(heroImage, Herot, Heroesd, Herod);
                    })
                    console.log(jsonParsed);
                })
                .catch(err => console.log(err))
        }
        //Comics
    const getConnection2 = () => {
            fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}&ts=${timeStamp}&hash=${md5}&limit=` + r1)
                .then((response) => { return response.json(); })
                .then((jsonParsed) => {
                    const Heroesd = document.querySelector('#person2');
                    jsonParsed.data.results.forEach(element => {
                        const heroImage = element.thumbnail.path + '.' + element.thumbnail.extension
                        const Herot = element.title
                        const Heros = element.startyear
                        const Heroz = element.creators
                        const Desc = element.description
                        createHero(heroImage, Herot, Heroesd, Heros, Heroz, Desc);
                    })
                    console.log(jsonParsed);
                })
                .catch(err => console.log(err))
        }
        //Criadores
    const getConnection3 = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/creators?apikey=${apiKey}&ts=${timeStamp}&hash=${md5}&limit=` + r1)
            .then((response) => { return response.json(); })
            .then((jsonParsed) => {
                const Heroesd = document.querySelector('#person3');
                jsonParsed.data.results.forEach(element => {
                    const heroImage = element.thumbnail.path + '.' + element.thumbnail.extension
                    const Herot = element.firstName
                    const Heros = element.startyear
                    const Heroz = element.creators
                    const Desc = element.description
                    createHero(heroImage, Herot, Heroesd, Heros, Heroz, Desc);
                })
                console.log(jsonParsed);
            })
            .catch(err => console.log(err))
    }

    //startando as funções criadas
    getConnection()
    getConnection2()
    getConnection3()