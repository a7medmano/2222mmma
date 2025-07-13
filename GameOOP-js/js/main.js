import { GetDataGames } from "./home.js";

const GetGames = new GetDataGames();

GetGames.getGame("mmorpg");
const navLinks = document.querySelectorAll("a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    GetGames.getGame(e.target.id);
    navLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
}
