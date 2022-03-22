const btnInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  btnInstall.style.visibility = "visible";
  // textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `btnInstall` element
btnInstall.addEventListener("click", async (event) => {
  event.prompt();
  btnInstall.setAttribute("disabled", true);
  btnInstall.textContent = "Installed!";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
//   textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});

// window.addEventListener('beforeinstallprompt', (event) => {

//   // Store the triggered events
//   window.deferredPrompt = event;

//   // Remove the hidden class from the button.
//   btnInstall.classList.toggle('hidden', false);
// });

// btnInstall.addEventListener('click', async () => {

// const promptEvent = window.deferredPrompt;

// if (!promptEvent) {
//  return;
// }

// // Show prompt
// promptEvent.prompt();

// // Reset the deferred prompt variable, it can only be used once.
// window.deferredPrompt = null;

// btnInstall.classList.toggle('hidden', true);
// });

// window.addEventListener('appinstalled', (event) => {
// // Clear prompt
// window.deferredPrompt = null;
// }); 

