import { DisplayDitails } from "./display.js";

export class GetDitailsGames {
  async getDitails(id) {
    const ditails = new DisplayDitails();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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

      ditails.creatSectionDitails(result);
    } catch (error) {
      console.error(error);
    }
  }
}
