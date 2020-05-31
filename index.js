function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.JSON())
  .then(JSON => renderBooks(JSON));
}

function renderBooks(JSON) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
