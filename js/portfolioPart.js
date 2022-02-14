document.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector("#portfolio>ul.projects")


    fetch("../portfolio.json")
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    for (let i = 0; i < data.portfolio.length; i++) {
                        content.innerHTML += `
                                            <li>
                                            <figure id="${data.portfolio[i].id}" itemscope itemtype="https://schema.org/Thing"
                                            itemref="rockPaperScissors portfolioAymeline etchASketch">
                                            <img itemprop="image" src="./assets/img/portfolio/${data.portfolio[i].img}" alt="${data.portfolio[i].title}">
                                            <figcaption itemprop="description">
                                            <p itemprop="name">${data.portfolio[i].title}</p>
                                            <ul>
                                            </ul>
                                            <a itemprop="url" href="${data.portfolio[i].url}" target="_blank"
                                            rel="noopener"><i class="far fa-eye"></i>Lien vers ${data.portfolio[i].title}
                                            </a>
                                            </figcaption>
                                            </figure>
                                            </li>`

                        for (let j = 0; j <= data.portfolio[i].tools.length; j++) {
                            data.portfolio[i].tools[j] == "database"
                                ?
                                document.querySelector(`#portfolio>ul>li:nth-child(${i+1}) figcaption ul`).innerHTML += `<li> <i itemprop="instrument" class="fas fa-${data.portfolio[i].tools[j]}" aria-hidden="true"></li>`
                                :
                                document.querySelector(`#portfolio>ul>li:nth-child(${i+1}) figcaption ul`).innerHTML += `<li> <i itemprop="instrument" class="devicon-${data.portfolio[i].tools[j]}-plain" aria-hidden="true"></i></li>`
                        }
                    }
                    let list = document.querySelectorAll("#portfolio>ul>li")
                    list[0].classList.add('active')
                })
            } else {
                console.log("Error")
            }
        })
})

