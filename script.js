 function renderAllRatings() {
    const containers = document.querySelectorAll('.rating');

    containers.forEach(container => {
      const rating = parseFloat(container.dataset.rating);

      if (isNaN(rating)) {
        console.warn('Нет data-rating или не число', container);
        return;
      }

      const rounded = Math.floor(rating);
      
      container.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = i < rounded ? 'images/cupActive.png' : 'images/cup.png';
        container.appendChild(img);
      }
    });
  }

document.addEventListener('DOMContentLoaded', function() {
  if (typeof renderAllRatings === 'function') {
      renderAllRatings();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav");

  if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
          menuToggle.classList.toggle("open");
          navMenu.classList.toggle("open");
      });
  }
  
});

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

document.getElementById('areasearch').addEventListener('input', function(event) 
{
  const sections = document.querySelectorAll('section');
  const query = event.target.value.trim().toLowerCase();

	for (const section of sections){
		const h2Text = section.querySelector('h2').textContent.trim().toLowerCase();

		if (h2Text.includes(query)){
			  section.style.display = '';
		}
		else {
			  section.style.display = 'none';
		}
  }
});