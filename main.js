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
});

allLeftsBtn.addEventListener('click', function(){
  leftList = [...leftList,...rightList];
  rightList = [];
  clearDom();
  renderDom(leftList, rightList);
  checkSides();
});

rightBtn.addEventListener('click', function(){
  document.querySelectorAll(".left-side .box").forEach(item => {
    if(item.querySelector("input").checked == true){
      rightList.push({
        id: item.querySelector('input').id,
        checked: false,
        title: item.querySelector('label').textContent
      });

      leftList = leftList.filter(items => {
        return (items.id != item.querySelector('input').id);
      });

    }
  });
  clearDom();
  renderDom(leftList, rightList);
  checkSides();
});

leftBtn.addEventListener('click', function(){
  document.querySelectorAll(".right-side .box").forEach(item => {
    if(item.querySelector("input").checked == true){
      leftList.push({
        id: item.querySelector('input').id,
        checked: false,
        title: item.querySelector('label').textContent
      });

      rightList = rightList.filter(items => {
        return (items.id != item.querySelector('input').id);
      });

    }
  });
  clearDom();
  renderDom(leftList, rightList);
  checkSides();
});

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
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function checkSides() {
  if(leftList.length == 0) {
    allRightsBtn.classList.add("disabled");
    rightBtn.classList.add("disabled");
    allLeftsBtn.classList.remove("disabled");
    leftBtn.classList.remove("disabled");
  } else if(rightList.length == 0)  {
    allRightsBtn.classList.remove("disabled");
    rightBtn.classList.remove("disabled");
    allLeftsBtn.classList.add("disabled");
    leftBtn.classList.add("disabled");
  } else {
    allLeftsBtn.classList.remove("disabled");
    leftBtn.classList.remove("disabled");
    allRightsBtn.classList.remove("disabled");
    rightBtn.classList.remove("disabled");
  }
}