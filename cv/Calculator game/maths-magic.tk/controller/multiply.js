const opt1 = document.querySelector("#opt1"),
      opt2 = document.querySelector("#opt2"),
      opt3 = document.querySelector("#opt3"),
      audio = document.querySelector("#wrong-audio");  
var result = 0;



function generate_equation(){ 
  var digit1 = Math.floor(Math.random() * 13),
      digit2 = Math.floor(Math.random() * 13),
      dummyResult1 = Math.floor(Math.random() * 50),
      dummyResult2 = Math.floor(Math.random() * 50),
      allResults = [],
      switchResults = [];

  result = eval(digit1 * digit2);
  
  document.querySelector("#digit1").innerHTML = digit1; 
  document.querySelector("#digit2").innerHTML = digit2; 

  allResults = [result, dummyResult1, dummyResult2];

  for (i = allResults.length; i--;){
    switchResults.push(allResults.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  opt1.innerHTML = switchResults[0];
  opt2.innerHTML = switchResults[1];
  opt3.innerHTML = switchResults[2]; 

};

opt1.addEventListener("click", function(){
    if(opt1.innerHTML == result){
      generate_equation();
    }
    else{
      audio.play();
    }
});

opt2.addEventListener("click", function(){
    if(opt2.innerHTML == result){
      generate_equation();
    }
    else{
      audio.play();
    }
});

opt3.addEventListener("click", function(){
    if(opt3.innerHTML == result){
     generate_equation();
    }
    else{
      audio.play();
    }
});

generate_equation()


