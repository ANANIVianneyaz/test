// Code JavaScript pour l'importation et la lecture de la vidéo

// Écouter l'événement de chargement de la page
window.addEventListener('DOMContentLoaded', function() {
  // Récupérer les paramètres de l'URL
  const params = new URLSearchParams(window.location.search);
  const videoTitle = params.get('title');
  const videoURL = params.get('url');

  // Afficher le titre et la vidéo sur la page de lecture
  if (videoTitle && videoURL) {
    const videoContainer = document.getElementById('video-container');
    const videoTitleElement = document.getElementById('video-title');

    videoContainer.innerHTML = `
      <video controls>
        <source src="${videoURL}" type="video/mp4">
      </video>
    `;

    videoTitleElement.textContent = videoTitle;
  }
});
