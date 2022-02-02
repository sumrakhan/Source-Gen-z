var container= $('.container');
var submit= $('.sub');

submit.on("click",niceMessage);

function niceMessage() {
  event.preventDefault();
  var name = $('.nameSubmit').val();
  container.append (`
  <div class="bgWork">
  <center><p class="awesome"style="font-size:30px;color:#bc5a45">Hello ${name}! </p></center>
  </div>
  `)
}

submit.on("click",yesNo);

function yesNo() {
  event.preventDefault();
  var yn =$('.yesOrNoButton').val();
  if (yn === "Yes"  ) {
  container.append('<div class=bgWork"><center><p class ="awesome">Awesome! Click the button to donate!</p></center></div>');
  } else if (yn === "No" ) {
    container.append('<div class="bgWork"><center><p class="awesome">Are you sure you dont want to help? It is for a great cause!</p></center></div>');
  }
}

submit.on("click",selectProblem);
function selectProblem() {
  event.preventDefault();
  var select=$('.information').val();
  if (select === "Yemen") {
    container.append('<center><a href="yemen.html""#goToYemen"><button class="btn1" type="button">Donate Here</button></a></center>');
  } else if (select === "BLM") {
    container.append('<center><a href="BLM.html"><button class="btn2" type="button">Donate Here</button></a></center>');
  } else if (select === "Uyghur Concentration Camps") {
    container.append('<a href="Uyghur.html"><center><button class="btn3" type="button">Donate Here</button></center></a>');
  }
}


