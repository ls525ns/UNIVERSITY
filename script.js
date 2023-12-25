const container = document.querySelector(".categories");
const categories = [
  "Art",
  "Collectibles",
  "Music",
  "Photografy",
  "Video",
  "Utility",
  "Sport",
  "Virtual Worlds",
];

for (let i = 0; i < categories.length; i++) {
  const divElement = document.createElement("div");
  divElement.classList.add("fourth_card-categories");

  const imgElement = document.createElement("div");
  imgElement.classList.add("fourt_card-img");
  const img = document.createElement("img");
  img.setAttribute("src", "./IMAGES/Photo & Icon.png");
  imgElement.appendChild(img);

  const h5Element = document.createElement("h5");
  h5Element.textContent = categories[i];
  divElement.appendChild(imgElement);
  divElement.appendChild(h5Element);
  container.appendChild(divElement);
}

const countdownTimer = (initialTime) => {
  let time = { ...initialTime };

  const updateDisplay = () => {
    document.getElementById("hours").textContent = String(time.hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(
      time.minutes
    ).padStart(2, "0");
    document.getElementById("seconds").textContent = String(
      time.seconds
    ).padStart(2, "0");
  };

  const intervalId = setInterval(() => {
    if (time.seconds > 0) {
      time.seconds -= 1;
    } else {
      if (time.minutes > 0) {
        time.minutes -= 1;
        time.seconds = 59;
      } else {
        if (time.hours > 0) {
          time.hours -= 1;
          time.minutes = 59;
          time.seconds = 59;
        } else {
          clearInterval(intervalId);
        }
      }
    }

    updateDisplay();
  }, 1000);

  return () => clearInterval(intervalId);
};

const initialTime = {
  hours: 2,
  minutes: 30,
  seconds: 0,
};

countdownTimer(initialTime);
const seeAllBtn = document.querySelector(".see_all_btn");
const nftsContainer = document.querySelector(".new-NFTs");

seeAllBtn.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    let newNFTsBox = document.createElement("div");
    newNFTsBox.className = "NFTs-box";

    newNFTsBox.innerHTML = `
          <img src="./IMAGES/P5-1.png" class="NFTs-img">
          <div class="box-profile">
              <h5>Distant Galaxy</h5>
              <div class="NFTs-owner">
                  <img src="./IMAGES/User.png">
                  <p>MoonDacner</p>
              </div>
              <div class="NFTs-price">
                  <div>Price</div>
                  <div>Highest Bid</div>
              </div>
              <div class="NFTs-numbers">
                  <div>1.63 ETH</div>
                  <div>0.33 wETH</div>
              </div>
          </div>
      `;

    nftsContainer.appendChild(newNFTsBox);
  }
});
