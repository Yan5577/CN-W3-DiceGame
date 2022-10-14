// let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  // let score = Math.floor(Math.random() * 6 + 1);
  
 let Btn1 = document.querySelector(".Btn1");
 let Btn2 = document.querySelector(".Btn2");
 let totalScore = 0;
 
 
 Btn1.addEventListener("click", () => {
  let result = Math.floor(Math.random() * 6 + 1);
  let randomImageSource = "imgs/dice" + result + ".svg";
   document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
   totalScore += result;
   document.querySelector(".result").textContent = totalScore;

  if (totalScore >= 20){

    document.querySelector(".result").textContent = "you win!";
    Btn1.style.display = "none";
    Btn2.style.display = "block";
  }
  });


  Btn2.addEventListener("click", () => {
  totalScore = 0;
  document.querySelector(".result").textContent = totalScore;
  Btn1.style.display = "block";
  Btn2.style.display = "none";

});


