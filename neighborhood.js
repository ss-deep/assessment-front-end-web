



function showSuggestion(event) {
    let thingsAry = ['Ann and Roy Butler Hike-and-Bike Trail at Lady Bird Lake', 'Museum of the Weird', 'The Congress Bat Bridge', 'Ghost Tours: Learn about the haunted history of Austin', "Antone’s: Live music almost every night with a focus on jazz and blues"]
    let restaurantsAry =['Try the soup dumplings at modern Chinese Wu Chow','Mexican cuisine at La Condesa', 'House-made pasta at the industrial-meets-Italian Red Ash', 'Yummi Joy: Brightly colored candy shop and ice cream', "Franklin’s BBQ: Austin’s most famous BBQ location"]
    
    if (event.target.id === 'restaurantBtn') {
        const randNum = restaurantsAry[Math.floor(Math.random() * restaurantsAry.length)];
        document.querySelector('#restaurant').textContent=randNum
    }
    if (event.target.id === 'thingsBtn') {
        const randNum = thingsAry[Math.floor(Math.random() * thingsAry.length)];
        document.querySelector('#things-to-do').textContent=randNum
    }
    
}

document.querySelector('#thingsBtn').addEventListener('click',showSuggestion)
document.querySelector('#restaurantBtn').addEventListener('click', showSuggestion)


