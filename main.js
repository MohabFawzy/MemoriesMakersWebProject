const whyUs = document.getElementById("why-us"); // Selects an element with the id "why-us".
const team = document.getElementById("team"); // Selects an element with the id "team".
const whyCardsImgs = [
  "./images/whyUs/rocket.svg",
  "./images/whyUs/pieChart.svg",
  "./images/whyUs/lock.svg",
]; // Array containing image file paths for why cards.

// Array containing data for team members.
const teamCardsData = [
  {
    name: "Mai Elmetwally",
    title: "CS2",
    img: "../images/team/mai.jpg",
  },
  {
    name: "Shahd Magdy",
    title: "CS2",
    img: "../images/team/shahd.jpg",
  },
  {
    name: "Sama Sabry",
    title: "CS2",
    img: "../images/team/sama.jpg",
  },
  {
    name: "Moaz Magdy",
    title: "CS2",
    img: "../images/team/moaz.jpg",
  },
  {
    name: "",
    title: "",
    img: "./images/meet-our-team-img.png",
  },
  {
    name: "Mohab Mohamed",
    title: "CS2",
    img: "../images/team/mohab.jpg",
  },
];

// Loops through each image path in whyCardsImgs array and adds HTML content to whyUs element.
whyCardsImgs.map((i) => {
  whyUs.innerHTML += `
    <div class="why-card">
                <h3>Tittle</h3>
                <div>
                  <img src="${i}" alt="rocket" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
                  adipisci?
                </p>
              </div>`;
});

// Loops through each member data in teamCardsData array and adds HTML content to team element.
teamCardsData.map((c) => {
  team.innerHTML += `<div class="col">
  <div class="member-img">
    <img draggable="false"
    ondrag="return false;"
    onselectstart="return false;"
    oncontextmenu="return false;" src="${c.img}" alt="member" />
  </div>
  <a href="#" class="member-link">
    <div>
      <span class="member-name">${c.name}</span>
      <span>${c.title}</span>
    </div>
    ${
      c.name == ""
        ? ""
        : `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="arr-icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>`
    }
    
  </a>
</div>`;
});
