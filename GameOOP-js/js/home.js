import { DisplayCards } from "./display.js";

const displayCards = new DisplayCards();
const sectionReload = document.getElementById("sectionReload");
export class GetDataGames {
  async getGame(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1cf791a546msh93bf089d0b9f131p152d21jsn8b6226556b08",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (response.status === 200) {
        sectionReload.classList.add("d-none");
      }
      const result = await response.json();

      displayCards.creatCard(result);
    } catch (error) {
      console.error(error);
    }
  }
}
