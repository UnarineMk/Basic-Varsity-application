import HomeScreen from "./Screen/HomeScreen.js";
import { parseRequestUrl } from "./utilis.js";

const routes = {
  "/": HomeScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = await document.getElementById("main-container");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
