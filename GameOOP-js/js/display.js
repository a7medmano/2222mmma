import { GetDitailsGames } from "./details.js";

const sectionDetails = document.getElementById("sectionDetails");

const sectionGames = document.getElementById("sectionGames");
const containerCards = document.getElementById("containerCards");
const containerDitails = document.getElementById("containerDitails");

export class DisplayCards {
  creatCard(result) {
    containerCards.innerHTML = " ";
    containerCards.classList.add("row", "g-4");

    for (let i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      const card = document.createElement("div");
      const cardBody = document.createElement("div");
      const cardFooter = document.createElement("footer");
      const image = document.createElement("img");
      const imageCaption = document.createElement("div");
      const h3 = document.createElement("h3");
      const imageSpan = document.createElement("span");
      const paragraph = document.createElement("p");
      const footerSpan1 = document.createElement("span");
      const footerSpan2 = document.createElement("span");

      col.classList.add("col-md-6", "col-lg-4", "col-xl-3");
      card.classList.add(
        "item",
        "border",
        "border-2",
        "text-light",
        "rounded-2",
        "p-0",
        "d-flex",
        "flex-column",
        "justify-content-between"
      );
      card.setAttribute("id", "card");

      cardBody.classList.add("p-2");
      cardFooter.classList.add(
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "px-2",
        "py-1"
      );

      image.src = result[i].thumbnail;
      image.classList.add("w-100", "rounded-top-2");

      imageCaption.classList.add(
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "mt-3"
      );

      const h3Text = document.createTextNode(result[i].title);
      const spanText = document.createTextNode("Free");
      const paragraphText = document.createTextNode(
        result[i].short_description
      );

      const spanTextFooter1 = document.createTextNode(result[i].genre);
      const spanTextFooter2 = document.createTextNode(result[i].platform);

      containerCards.appendChild(col);
      col.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(image);
      cardBody.appendChild(imageCaption);
      imageCaption.appendChild(h3);
      h3.appendChild(h3Text);
      imageCaption.appendChild(imageSpan);
      imageSpan.appendChild(spanText);
      cardBody.appendChild(paragraph);
      paragraph.appendChild(paragraphText);
      card.appendChild(cardFooter);
      cardFooter.appendChild(footerSpan1);
      footerSpan1.appendChild(spanTextFooter1);
      cardFooter.appendChild(footerSpan2);
      footerSpan2.appendChild(spanTextFooter2);

      this.addEventCard(card, result[i]);
    }
  }

  addEventCard(card, res) {
    card.addEventListener("click", function (e) {
      const displayDitails = new GetDitailsGames();
      displayDitails.getDitails(res.id);

      sectionDetails.classList.remove("d-none");
      sectionGames.classList.add("d-none");
    });
  }
}

export class DisplayDitails {
  creatSectionDitails(result) {
    containerDitails.innerHTML = " ";
    const nav = document.createElement("div");
    const h5Nav = document.createElement("h5");
    const h5NavText = document.createTextNode("Details Game");
    const icon = document.createElement("i");
    const details = document.createElement("div");
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    const captionImage = document.createElement("div");
    const h5Image = document.createElement("h5");
    const h5ImageText = document.createTextNode("Title: " + result.title);
    const paragraph1 = document.createElement("p");
    const paragraph1Text = document.createTextNode("Category:");
    const paragraph1Span = document.createElement("span");
    const paragraph1SpanText = document.createTextNode(result.genre);
    const paragraph2 = document.createElement("p");
    const paragraph2Text = document.createTextNode("Platform:");
    const paragraph2Span = document.createElement("span");
    const paragraph2SpanText = document.createTextNode(result.platform);
    const paragraph3 = document.createElement("p");
    const paragraph3Text = document.createTextNode("Status:");
    const paragraph3Span = document.createElement("span");
    const paragraph3SpanText = document.createTextNode(result.status);
    const paragraph4 = document.createElement("p");
    const paragraph4Text = document.createTextNode(result.description);
    const btnShowGame = document.createElement("a");
    const btnShowGameText = document.createTextNode("show Game");

    nav.classList.add(
      "d-flex",
      "justify-content-between",
      "text-light",
      "py-5"
    );
    h5Nav.classList.add("navbar-brand");
    icon.classList.add("fa", "fa-xmark");
    icon.setAttribute("id", "sectionDetailsIcon");
    details.classList.add("row", "justify-content-between");
    imageDiv.classList.add("col-md-4");
    image.src = result.thumbnail;
    image.classList.add("w-100");
    captionImage.classList.add("col-md-8", "text-light");
    h5Image.classList.add("h3");
    btnShowGame.classList.add("btn", "btn-outline-warning", "text-light");
    btnShowGame.setAttribute("id", "btnShowGame");
    btnShowGame.setAttribute("target", "_blank");

    containerDitails.appendChild(nav);
    containerDitails.appendChild(details);
    nav.appendChild(h5Nav);
    h5Nav.appendChild(h5NavText);
    nav.appendChild(icon);
    details.appendChild(imageDiv);
    imageDiv.appendChild(image);
    details.appendChild(captionImage);
    captionImage.appendChild(h5Image);
    h5Image.appendChild(h5ImageText);
    captionImage.appendChild(paragraph1);
    paragraph1.appendChild(paragraph1Text);
    paragraph1.appendChild(paragraph1Span);
    paragraph1Span.appendChild(paragraph1SpanText);
    captionImage.appendChild(paragraph2);
    paragraph2.appendChild(paragraph2Text);
    paragraph2.appendChild(paragraph2Span);
    paragraph2Span.appendChild(paragraph2SpanText);
    captionImage.appendChild(paragraph3);
    paragraph3.appendChild(paragraph3Text);
    paragraph3.appendChild(paragraph3Span);
    paragraph3Span.appendChild(paragraph3SpanText);
    captionImage.appendChild(paragraph4);
    paragraph4.appendChild(paragraph4Text);

    captionImage.appendChild(btnShowGame);
    btnShowGame.appendChild(btnShowGameText);

    this.addEventAtDitailsSection();
    this.addEventAtDitailsSectionBtn(result);
  }

  addEventAtDitailsSection() {
    const sectionDetailsIcon = document.getElementById("sectionDetailsIcon");
    sectionDetailsIcon.addEventListener("click", function (e) {
      sectionDetails.classList.add("d-none");
      sectionGames.classList.remove("d-none");
    });
  }
  addEventAtDitailsSectionBtn(res) {
    const btnShowGame = document.getElementById("btnShowGame");
    btnShowGame.addEventListener("click", function (e) {
      btnShowGame.setAttribute("href", res.game_url);
    });
  }
}
