const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const allRightsBtn = document.querySelector('.all-to-right');
const allLeftsBtn = document.querySelector('.all-to-left');
const rightBtn = document.querySelector('.checked-to-right');
const leftBtn = document.querySelector('.checked-to-left');

// InitialValues
let leftList = [{
    id: "item1",
    checked: false,
    title: "PHP"
  },
  {
    id: "item2",
    checked: false,
    title: "Python"
  },
  {
    id: "item3",
    checked: false,
    title: "Ruby"
  },
  {
    id: "item4",
    checked: false,
    title: "C++"
  },
];
let rightList = [{
    id: "item5",
    checked: false,
    title: "HTML"
  },
  {
    id: "item6",
    checked: false,
    title: "Css"
  },
  {
    id: "item7",
    checked: false,
    title: "JavaScript"
  },
  {
    id: "item8",
    checked: false,
    title: "Java"
  },
];

renderDom(leftList, rightList);
allRightsBtn.addEventListener('click', function(){
  rightList = [...rightList,...leftList];
  leftList = [];
  clearDom();
  renderDom(leftList, rightList);
  checkSides();
})
allLeftsBtn.addEventListener('click', function(){
  leftList = [...leftList,...rightList];
  rightList = [];
  clearDom();
  renderDom(leftList, rightList);
  checkSides();
})
rightBtn.addEventListener('click', function(){
  checkSides()
})
leftBtn.addEventListener('click', function(){
  checkSides()
})
// Render Dom
function renderDom(leftListToRender, rightListToRender) {
  leftListToRender.forEach((item) => {
    leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
  });

  rightListToRender.forEach((item) => {
    rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
  });

  registerEvents();
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function registerEvents() {}