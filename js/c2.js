//chama as imagens e os textos da api.
function createHero(heroImage, Herot, Herodi) {
    const p1 = document.createElement('div')
    const p2 = document.createElement('div')
    const p3 = document.createElement('text')
    const p4 = document.createElement('img')

    p3.textContent = Herot
    p4.src = heroImage


    p2.appendChild(p4)
    p2.appendChild(p3)
    p1.appendChild(p2)
    Herodi.appendChild(p1)

    p1.classList.add("pHeroes");

}