//DOM

const heading = document.getElementById('hello')//обратиться к элементу по его id
// const heading2 = document.getElementsByTagName('h2')[0]// обратиться к элементам по названию тега
// const heading2 = document.getElementsByClassName('h2-class')[0]// обратиться по классу(вешается на тег как id
// const heading2 = document.querySelector('.h2-class')// обратиться к тегу через присвоеный ему класс
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент// обратиться к тегу через присвоеный id
const heading2 = document.querySelector('h2')// обращение к тегу по присвоеному сss стилю


// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')//обращает к множеству элементов
const heading3 = h2List[h2List.length - 1]


setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})


setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'

    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}


heading2.addEventListener('dblclick', () => {// добавляет событие слушателя
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})