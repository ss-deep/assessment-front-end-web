let favButton = document.querySelectorAll('.favorite')
const fav = {
    color: 'Blue',
    place: 'New York',
    ritual:'Meditation'
}
for (let i = 0; i < favButton.length; i++){
    favButton[i].addEventListener('click', (event) => {
        let favId = event.target.id
        alert(`My Favorite ${favId} is ${fav[favId]}.`)
    })
}