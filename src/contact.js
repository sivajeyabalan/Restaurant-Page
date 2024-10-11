export function loadContact() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const address = document.createElement('p');
  address.textContent = '123 Bun Parotta Street, Madurai, Tamil Nadu';

  const phone = document.createElement('p');
  phone.textContent = '📞 Phone: +91 98765 43210';

  const email = document.createElement('p');
  email.textContent = '✉️ Email: contact@maduraibunparotta.com';

  content.appendChild(headline);
  content.appendChild(address);
  content.appendChild(phone);
  content.appendChild(email);
}
