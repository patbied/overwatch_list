const main_content = document.getElementById('main_content')
const renderCharacters = async() => {
    const response = await fetch('/characters')
    const data = await response.json()
    if (data) {
        console.log(data)
        data.map(char => {
            const card = document.createElement('article')
            const header = document.createElement('header')
            const footer = document.createElement('footer')
            header.textContent = char.name
            const typeText = document.createElement('span')
            typeText.textContent = char.type
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/characters/${char.id}`
            footer.appendChild(link)
        
            card.appendChild(header)
            card.appendChild(typeText)
            card.append(footer)
           
            main_content.appendChild(card)
        })
    }
   
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
} else {
    renderCharacters()
}
