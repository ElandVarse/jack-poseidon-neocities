// create a reusable overlay
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img alt="">';
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');

// add event click to any .post-image element
document.addEventListener('click', (e) => {
  const img = e.target.closest('.post-image');

  if (img) {
    // if the lightbox is already open with the same image, close it (toggle)
    const sameOpen = lightbox.classList.contains('open') && lbImg.src === img.src;
    if (sameOpen) {
      lightbox.classList.remove('open');
      return;
    }
    // otherwise, open the lightbox with the clicked image
    lbImg.src = img.src;            // ou img.dataset.full se quiser alta resolução
    lightbox.classList.add('open');
    return;
  }

  // if the click is outside the image, close the lightbox
  if (e.target === lightbox || e.target === lbImg) {
    lightbox.classList.remove('open');
  }


// ESC key to close the lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});
});