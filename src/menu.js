export function loadMenu() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const items = [
    { name: 'Classic Bun Parotta', description: 'Soft and flaky, served with spicy salna.' },
    { name: 'Cheese Bun Parotta', description: 'Stuffed with melted cheese for an extra twist.' },
    { name: 'Chicken Bun Parotta', description: 'Layered with tender chicken curry.' }
  ];

  items.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = item.name;

    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDesc);
    content.appendChild(itemContainer);
  });
}
