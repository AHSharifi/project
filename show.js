const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

fetch('./config.json')
  .then(response => response.json())
  .then(data => {

    const ul = document.getElementById('menu')
    data.menu.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    
    const item = data.item.find(item => item.id === itemId);
    
    if (item) {
      const container = document.getElementById('box');
      container.innerHTML = `
        <h1>${item.name}</h1>
        <p class="description">${item.description}</p>
        <p>Price: ${item.price}$</p>
        <select id="colorSelect">
          ${
            item.color.map(color => {
              return `<option>${color}</option>`;
            }).join('')
          }
        </select>
        <select id="sizeSelect">
          ${
            item.size.map(size => {
              return `<option>${size}</option>`
            }).join('')
          }
        </select>
        <img src="${item.image}" alt="${item.name}">
        <button id="btn">Add to cart</button>
      `;

      const btn = document.getElementById('btn')
      btn.addEventListener('click', () => {
        const colorValue = document.getElementById('colorSelect').value
        const sizeValue = document.getElementById('sizeSelect').value

        const cart = {
          name: document.getElementsByTagName('h1')[0].textContent,
          price: document.getElementsByTagName('p')[1].textContent,
          color: colorValue,
          size: sizeValue,
          img: document.getElementsByTagName('img')[0].src
        }
      })
    } else {
      alert('item not found!')
      console.error('آیتم مورد نظر یافت نشد');
    }
  })
  .catch(error => console.error('خطا در دریافت JSON:', error));
