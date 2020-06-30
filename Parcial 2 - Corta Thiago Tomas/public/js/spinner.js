const spinner = document.getElementById("spinner");
const img = document.createElement("img");
img.setAttribute("src", "../img/spinner.gif");
img.setAttribute("alt", "Loading...");
img.className = "loading-image";

export function showSpinner() {
  spinner.className = "show-spinner";
  spinner.appendChild(img);
}

export function hideSpinner() {
  spinner.className = "";
  spinner.removeChild(img);
}
