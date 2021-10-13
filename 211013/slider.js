// 컬러리스트 선택자 변수
const year = document.querySelector("#copy .year");
const bgColor = document.querySelector("#color_bg");
const bgInnerTitle = document.querySelector("#color_bg h1");
const bgInnerText = document.querySelector("#color_bg p");


// 컬러리스트
const btnYear = ["2017", "2018", "2019", "2020"];
const btnColor = ["Greenery", "Ultra Violet", "Living Coral", "Classic Blue"];
const btnNumber = ["15-0343", "18-3838", "16-1546", "19-4052"];
const btnBackgroundColor = ["#84bd00", "#5f4b8b" ,"#FF6D70" ,"#004680"];


// // 컬러리스트
// const bgText = [
//   { 
//     year : year.innerText = "2017",
//     color: bgInnerTitle.innerText = "Greenery",
//     number: bgInnerText.innerText = "15-0343",
//     bg: bgColor.style.backgroundColor = "#84bd00"
//   },
//   {
//     year : year.innerText = "2018",
//     color: bgInnerTitle.innerText = "Ultra Violet",
//     number: bgInnerText.innerText = "18-3838",
//     bg: bgColor.style.backgroundColor = "#5f4b8b"
//   },
//   {
//     year : year.innerText = "2019",
//     color: bgInnerTitle.innerText = "Living Coral",
//     number: bgInnerText.innerText = "16-1546",
//     bg: bgColor.style.backgroundColor = "#FF6D70"
//   },
//   {
//     year : year.innerText = "2020",
//     color: bgInnerTitle.innerText = "Classic Blue",
//     number: bgInnerText.innerText = "19-4052",
//     bg: bgColor.style.backgroundColor = "#004680"
//   }
// ];

// 버튼
const increase = document.querySelector("#btn .increase");
const decrease = document.querySelector("#btn .decrease");


// 감소버튼
decrease.addEventListener("click", function decreaseYear(event){
  let i = 3;
  i--;
  year.innerText = btnYear[i];
  bgInnerTitle.innerText = btnColor[i];
  bgInnerText.innerText = btnNumber[i];
  bgColor.style.backgroundColor = btnBackgroundColor[i];
  console.log("hello");
});

increase.addEventListener("click", function increaseYear(event){
  let i = 0;
  i++;
  year.innerText = btnYear[i];
  bgInnerTitle.innerText = btnColor[i];
  bgInnerText.innerText = btnNumber[i];
  bgColor.style.backgroundColor = btnBackgroundColor[i];
  console.log("me too");
});


year.innerText = "2020",
bgInnerTitle.innerText = "Classic Blue",
bgInnerText.innerText = "19-4052",
bgColor.style.backgroundColor = "#004680"
