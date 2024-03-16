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
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>Price: ${item.price}$</p>
        <img src="${item.image}" alt="${item.name}">
      `;
    } else {
      alert('item not found!')
      console.error('آیتم مورد نظر یافت نشد');
    }
  })
  .catch(error => console.error('خطا در دریافت JSON:', error));
