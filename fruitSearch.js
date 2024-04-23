const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const selectBody = document.querySelector('body')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const fruitTolLower = fruit.map(function (val) {
    return val.toLowerCase()
})

function search(str) {
    let results = str.toLowerCase().split(' ');
    return results;
}

function searchHandler(e) {
    let newArray = fruitTolLower.filter(function (val) {
        return val.includes(e)
    })
    return newArray
}

function deleteUl() {
    let deleteMe = Array.from(document.querySelectorAll('li'))
    deleteMe.forEach(function (val) {
        val.remove()
    })

}

function showSuggestions(results, inputVal) {
    if (inputVal === '') {
        return
    }
    return results.map(function (val) {
        let newLi = document.createElement('li')
        document.querySelector('.suggestions ul').append(newLi)
        newLi.innerText = val
        return newLi
    })

}

function useSuggestion(e) {
    if (e === undefined) {
        return
    }

    e.forEach(function (x) {
        x.addEventListener('click', function () {
            input.value = x.innerText
        })
        x.addEventListener('hover', function () {
            x.style.backgroundColor = '#bc8a5f'
        })
    })
}

// input.addEventListener('keyup', searchHandler);

input.addEventListener('keyup', function () {
    deleteUl()
    useSuggestion(showSuggestions(searchHandler(search(input.value)), input.value))
})