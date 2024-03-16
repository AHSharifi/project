fetch('./config.json')
  .then(response => response.json())
  .then(data => {


    const ul = document.getElementById('menu')
    data.menu.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });


    const items = document.getElementById('items')
    data.item.forEach(item => {
      const box = document.createElement('div')
      box.setAttribute('class', 'box')
      box.setAttribute('id', item.id)
      let h2 = document.createElement('h2')
      h2.textContent = item.name
      let p = document.createElement('p')
      p.textContent = item.description
      let price = document.createElement('p')
      price.textContent = `${item.price}$`
      let image = document.createElement('img')
      image.src = item.image
      let div = document.createElement('div')
      let button = document.createElement('button')
      button.setAttribute('class', 'btn')
      button.textContent = "Show"
      div.setAttribute('class', 'btn-box')
      div.appendChild(button)

      box.appendChild(image)
      box.appendChild(h2)
      box.appendChild(p)
      box.appendChild(price)
      box.appendChild(div)

      items.appendChild(box)

      button.addEventListener('click', (e) => {
        var parentId = e.target.parentNode.parentNode.id
        location.href = `show.html?id=${parentId}`;
      })
    })
  })
  .catch(error => console.error('Error fetching JSON:', error));