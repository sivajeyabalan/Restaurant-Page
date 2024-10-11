import ParottaImg from './assets/porotta.jpeg';

export function loadHome() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Madurai Bun Parotta!';

  const img = document.createElement('img');
  img.src = ParottaImg;
  img.alt = 'Bun Parotta';

  const description = document.createElement('p');
  description.textContent = 'Experience the authentic taste of Madurai’s finest Bun Parotta.';

  content.appendChild(headline);
  content.appendChild(img);
  content.appendChild(description);
}
