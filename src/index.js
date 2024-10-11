import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeButton').addEventListener('click', loadHome);
    document.getElementById('menuButton').addEventListener('click', loadMenu);
    document.getElementById('contactButton').addEventListener('click', loadContact);
    function clearContent() {
        content.innerHTML = '';
      }
    
      homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
      });
    
      menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
      });
    
      contactButton.addEventListener('click', () => {
        clearContent();
        loadContact();
      });
    
      // Load the home page by default
      loadHome();
    
});
