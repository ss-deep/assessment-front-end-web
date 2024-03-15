



function showSuggestion(event) {
    let thingsAry = [`<a href="https://www.austintexas.gov/department/ann-and-roy-butler-hike-and-bike-trail-and-boardwalk-lady-bird-lake/">Ann and Roy Butler Hike-and-Bike Trail</a></li> at Lady Bird Lake`,
        `<a href="Museum of the Weird">Museum of the Weird</a></li>`,
        `<a href="https://www.austintexas.org/things-to-do/outdoors/bat-watching/">The Congress Bat Bridge</a></li>`,
        `<a href="https://austinghosttours.com/">Ghost Tours</a></li>: Learn about the haunted history of Austin`,
        `<a href="https://antonesnightclub.com/"Antone’s: Live music </a></li> almost every night with a focus on jazz and blues`]
    
    let restaurantsAry = [`<a href="https://www.wuchowaustin.com/">Modern Chinese Wu Chow:</a></li>Try the soup dumplings`,
        `<a href="https://lacondesa.com/">Mexican cuisine at La Condesa</a></li>`,
        `<a href="https://www.redashgrill.com/">Red Ash:</a></li>House-made pasta at the industrial-meets-Italian`,
        `<a href="https://www.toyjoy.com/service/yummi-joy/">Yummi Joy</a></li>: Brightly colored candy shop and ice cream</a></li>`,
        `<a href="https://franklinbbq.com/">Franklin’s BBQ</a></li>: Austin’s most famous BBQ location`]
    
    if (event.target.id === 'restaurantBtn') {
        const randNum = restaurantsAry[Math.floor(Math.random() * restaurantsAry.length)];
        document.querySelector('#restaurant').innerHTML = `<a href="./home.html">${randNum}</a>`
    }
    if (event.target.id === 'thingsBtn') {
        const randNum = thingsAry[Math.floor(Math.random() * thingsAry.length)];
        document.querySelector('#things-to-do').innerHTML=randNum
    }
    
}

document.querySelector('#thingsBtn').addEventListener('click',showSuggestion)
document.querySelector('#restaurantBtn').addEventListener('click', showSuggestion)


