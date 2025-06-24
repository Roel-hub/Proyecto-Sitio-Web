window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Evita que el navegador lo muestre automáticamente
  deferredPrompt = e;

  const installBtn = document.createElement('button');
  installBtn.textContent = '📲 Instalar CarbonOut';
  installBtn.style.position = 'fixed';
  installBtn.style.top = '10px';
  installBtn.style.right = '10px';
  installBtn.style.padding = '10px 15px';
  installBtn.style.backgroundColor = '#4CAF50';
  installBtn.style.color = '#fff';
  installBtn.style.border = 'none';
  installBtn.style.borderRadius = '5px';
  installBtn.style.cursor = 'pointer';
  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    installBtn.remove(); // Quita el botón
    deferredPrompt.prompt(); // Muestra la ventana de instalación
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ El usuario instaló la PWA');
      } else {
        console.log('❌ El usuario canceló la instalación');
      }
      deferredPrompt = null;
    });
  });
});
