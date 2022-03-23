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
  // event.prompt();
  btnInstall.setAttribute("disabled", true);
  btnInstall.textContent = "Installed!";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
//   textHeader.textContent = "Successfully installed!";
  console.log("Installation successful", "appinstalled", event);
});

