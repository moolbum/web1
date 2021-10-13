// 컬러리스트 선택자 변수
const year = document.querySelector("#copy .year");
const bgColor = document.querySelector("#color_bg");
const bgInnerTitle = document.querySelector("#color_bg h1");
const bgInnerText = document.querySelector("#color_bg p");


// 컬러리스트
const bgText = [
  { 
    year : year.innerText = "2017",
    color: bgInnerTitle.innerText = "Greenery",
    number: bgInnerText.innerText = "15-0343",
    bg: bgColor.style.backgroundColor = "#84bd00"
  },
  {
    year : year.innerText = "2018",
    color: bgInnerTitle.innerText = "Ultra Violet",
    number: bgInnerText.innerText = "18-3838",
    bg: bgColor.style.backgroundColor = "#5f4b8b"
  },
  {
    year : year.innerText = "2019",
    color: bgInnerTitle.innerText = "Living Coral",
    number: bgInnerText.innerText = "16-1546",
    bg: bgColor.style.backgroundColor = "#FF6D70"
  },
  {
    year : year.innerText = "2020",
    color: bgInnerTitle.innerText = "Classic Blue",
    number: bgInnerText.innerText = "19-4052",
    bg: bgColor.style.backgroundColor = "#004680"
  }
];


// 버튼
const increase = document.querySelector("#btn .increase");
const decrease = document.querySelector("#btn .decrease");

// 감소버튼
decrease.addEventListener("click", function decreaseYear(event){
  i--; // initialse i outside
  year.innerHTML = bgText[i].year;
  bgInnerTitle.innerHTML = bgText[i].color;
  console.log("hello");
});

// 증가버튼
increase.addEventListener("click", function increaseYear(event){
  console.log('hello');
});


