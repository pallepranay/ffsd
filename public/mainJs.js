// Ayush Code

/* Animated Counter */

var stud = setInterval(enrollstud, 50)
var course = setInterval(totalcourse, 50)
var pstud = setInterval(placedstud, 50)
var tintern = setInterval(totalintern, 50)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function enrollstud() {
    count1++
    document.querySelector("#counter1").innerHTML = count1
    if (count1 == 407) {
        clearInterval(stud)
    }
}


function totalcourse() {
    count2++
    document.querySelector("#counter2").innerHTML = count2
    if (count2 == 348) {
        clearInterval(course)
    }
}

function placedstud() {
    count3++
    document.querySelector("#counter3").innerHTML = count3
    if (count3 == 356) {
        clearInterval(pstud)
    }
}

function totalintern() {
    count4++
    document.querySelector("#counter4").innerHTML = count4
    if (count4 == 317) {
        clearInterval(tintern)
    }
}


var vid = document.getElementsByClassName("vidContainer");
// $(window).scroll(function(e) {
//   var scrollTop = $(window).scrollTop();
//   var docHeight = $(document).height();
//   var winHeight = $(window).height();
//   var scrollPercent = (scrollTop) / (docHeight - winHeight);
// // console.log(scrollTop);
// });
console.log(vid[0].getBoundingClientRect().top)

$(window).scroll(function(e) {
  if (vid[0].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[0].style.animation = "vidAnime 1s forwards";
  }
  if (vid[1].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[1].style.animation = "vidAnime 1s forwards";
  }
  if (vid[2].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[2].style.animation = "vidAnime 1s forwards";
  }
  if (vid[3].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[3].style.animation = "vidAnime 1s forwards";
  }
  if (vid[4].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[4].style.animation = "vidAnime 1s forwards";
  }
  if (vid[5].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[5].style.animation = "vidAnime 1s forwards";
  }
  if (vid[6].getBoundingClientRect().top < 400) {
    document.getElementsByClassName('vidContainer')[6].style.animation = "vidAnime 1s forwards";
  }
});
