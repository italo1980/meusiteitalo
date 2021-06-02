

function aparecer() {
  document.getElementById("coluna1").innerHTML = "Web Designer"
}

function desaparecer() {
  document.getElementById("coluna1").innerHTML = ""

}




function aparecer2() {
  document.getElementById("coluna2").innerHTML = "Web Designer"
}

function desaparecer2() {
  document.getElementById("coluna2").innerHTML = ""

}

function aparecer3() {
  document.getElementById("coluna3").innerHTML = "Web Designer"
}

function desaparecer3() {
  document.getElementById("coluna3").innerHTML = ""

}

function aparecer4() {
  document.getElementById("coluna4").innerHTML = "Web Designer"
}

function desaparecer4() {
  document.getElementById("coluna4").innerHTML = ""

}

function aparecer5() {
  document.getElementById("coluna5").innerHTML = "Web Designer"
}

function desaparecer5() {
  document.getElementById("coluna5").innerHTML = ""

}

function aparecer6() {
  document.getElementById("coluna6").innerHTML = "Web Designer"
}

function desaparecer6() {
  document.getElementById("coluna6").innerHTML = ""

}

function aparecer7() {
  document.getElementById("coluna7").innerHTML = "Web Designer"
}

function desaparecer7() {
  document.getElementById("coluna7").innerHTML = ""

}

function aparecer8() {
  document.getElementById("coluna8").innerHTML = "Web Designer"
}

function desaparecer8() {
  document.getElementById("coluna8").innerHTML = ""

}
function aparecer9() {
  document.getElementById("coluna9").innerHTML = "Web Designer"
}

function desaparecer9() {
  document.getElementById("coluna9").innerHTML = ""

}
function aparecer10() {
  document.getElementById("coluna10").innerHTML = "Web Designer"
}

function desaparecer10() {
  document.getElementById("coluna10").innerHTML = ""

}
function aparecer11() {
  document.getElementById("coluna11").innerHTML = "Web Designer"
}

function desaparecer11() {
  document.getElementById("coluna11").innerHTML = ""

}
function aparecer12() {
  document.getElementById("coluna12").innerHTML = "Web Designer"
}

function desaparecer12() {
  document.getElementById("coluna12").innerHTML = ""

}




$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});