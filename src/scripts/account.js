(() => {
  const parentBtn = document.querySelector(".account__BtnBlock");
  const btns = document.querySelectorAll(".account__Btn");
  const cards = document.querySelectorAll(".account__card-outerWrapper");

  btns.forEach((btn) => btn.addEventListener("click", () => setActive(btn)));

  function setActive(btn) {
    parentBtn.querySelector(".active-btn").classList.remove("active-btn");
    btn.classList.add("active-btn");

    const cardId = btn.textContent === "Yearly" ? "enterprise" : "premium";
    const card = document.getElementById(cardId);
    card.scrollIntoView({ behavior: "smooth" });

    const target = btn.getAttribute("data-target");
    cards.forEach((card) => {
      if (card.getAttribute("data-target") === target) {
        card.classList.add("active-card");
      } else {
        card.classList.remove("active-card");
      }
    });
  }
})();
