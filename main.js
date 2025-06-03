console.log("Načteno rozšíření na změnu ceny na alze na korunu");

const prices = document.getElementsByClassName(
  "price-box__primary-price__value js-price-box__primary-price__value"
);

const promoPrices = document.getElementsByClassName(
  "promo-action-prices__price"
);

const skladem = document.getElementsByClassName(
  "AlzaText availability-alz-50 availability-alz-59 availability-alz-22 availability-alz-61"
);

const popisek = document.querySelectorAll("div.nameextc span");

const nadpis = document.getElementsByClassName("h1-placeholder");

const priceValue = "1,-";

const changeFunc = () => {
  const skladem = document.getElementsByClassName(
    "AlzaText availability-alz-50 availability-alz-59 availability-alz-22 availability-alz-61"
  );
  if (skladem) {
    setTimeout(() => {
      for (let i = 0; i < skladem.length; i++) {
        skladem[i].innerHTML = "Skladem > 420 ks";
      }
    }, 0);
  }

  if (!skladem[0]) setTimeout(changeFunc, 0);
};

window.onload = () => {
  if (prices)
    for (let i = 0; i < prices.length; i++) prices[i].innerText = priceValue;

  if (promoPrices)
    for (let i = 0; i < promoPrices.length; i++)
      promoPrices[i].innerText = priceValue;

  setTimeout(() => {
    changeFunc();
  }, 0);

  if (nadpis) {
    for (let i = 0; i < nadpis.length; i++) {
      if (nadpis[i].innerText.toLowerCase().includes("iphone")) {
        nadpis[i].innerText = "Nekupovat";
      }
    }
  }

  if (popisek) {
    for (let i = 0; i < popisek.length; i++) {
      popisek[i].innerText = popisek[i].innerText.replace("Apple", "Banana");
    }
  }
};
