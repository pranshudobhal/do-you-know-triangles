/** Start triangle or not */

document.getElementById('triangle-or-not').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('area-triangle').classList.add('hidden');
  document.getElementById('check-triangle').classList.remove('hidden');
  document.getElementById('triangle-type').classList.add('hidden');
  document.getElementById('find-angle').classList.add('hidden');
  document.getElementById('find-hypotenuse').classList.add('hidden');
  document.getElementById('output-sum').innerText = '';
});

document.getElementById('submit-sum').addEventListener('click', sumOfTriangles);

//add the values provided by user and check if triangle or not
function sumOfTriangles() {
  //Ask 3 angles from user
  var angleOne = document.getElementById('ang1');
  var angleTwo = document.getElementById('ang2');
  var angleThree = document.getElementById('ang3');
  var angleOneValue = angleOne.value;
  var angleTwoValue = angleTwo.value;
  var angleThreeValue = angleThree.value;

  if (angleOneValue == '' || angleTwoValue == '' || angleThreeValue == '') {
    document.getElementById('output-sum').innerText = 'Please provide all three angles!';
  } else if (angleOneValue == 0 || angleTwoValue == 0 || angleThreeValue == 0) {
    document.getElementById('output-sum').innerText = 'Angle cannot be ZERO! Please try again!';
  } else {
    var sum = Number(angleOneValue) + Number(angleTwoValue) + Number(angleThreeValue);
    if (sum === 180) {
      document.getElementById('output-sum').innerText = 'Yayy! It is a triangle 😀';
    } else {
      document.getElementById('output-sum').innerText = "🤨 The angles don't add up! Try Again!";
    }
  }

  angleOne.value = '';
  angleTwo.value = '';
  angleThree.value = '';
}
/** End triangle or not */

/** Start type of triangle */
document.getElementById('type-of-triangle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('area-triangle').classList.add('hidden');
  document.getElementById('check-triangle').classList.add('hidden');
  document.getElementById('triangle-type').classList.remove('hidden');
  document.getElementById('find-angle').classList.add('hidden');
  document.getElementById('find-hypotenuse').classList.add('hidden');
});
/** End type of triangle */

/** Start find the third angle */
document.getElementById('find-third-angle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('area-triangle').classList.add('hidden');
  document.getElementById('check-triangle').classList.add('hidden');
  document.getElementById('triangle-type').classList.add('hidden');
  document.getElementById('find-angle').classList.remove('hidden');
  document.getElementById('find-hypotenuse').classList.add('hidden');
});

document.getElementById('submit-third-angle').addEventListener('click', findThirdAngle);

var randomAngleOne = Math.floor(Math.random() * 100 + 1);
var randomAngleTwo = Math.floor(Math.random() * 100 + 1);
document.getElementById('angle-one').innerText = randomAngleOne;
document.getElementById('angle-two').innerText = randomAngleTwo;

function findThirdAngle() {
  var userAnswer = document.getElementById('guessed-angle').value;

  //validations
  if (userAnswer == '') {
    document.getElementById('output-third-angle').innerText = 'Please provide input!';
  } else if (userAnswer == 0) {
    document.getElementById('output-third-angle').innerText = 'Angle cannot be ZERO! Please try again!';
  } else {
    //calculate third angle
    var thirdAngle = 180 - (randomAngleTwo + randomAngleOne);
    // console.log(typeof thirdAngle);

    if (Number(userAnswer) === thirdAngle) {
      //display third angle
      document.getElementById('output-third-angle').innerText = ' Yess!! You are correct! The Third angle is : ' + thirdAngle;
    } else {
      //display third angle
      document.getElementById('output-third-angle').innerText = 'Oh no! The Third angle is : ' + thirdAngle;
    }
  }

  var randomAngleOne = Math.floor(Math.random() * 100 + 1);
  var randomAngleTwo = Math.floor(Math.random() * 100 + 1);
  document.getElementById('angle-one').innerText = randomAngleOne;
  document.getElementById('angle-two').innerText = randomAngleTwo;
}

// Math.floor(Math.random()*100 / 2)
/** End find the third angle */

/** Start find hypotenuse */
document.getElementById('hypotenuse-finder').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('area-triangle').classList.add('hidden');
  document.getElementById('check-triangle').classList.add('hidden');
  document.getElementById('triangle-type').classList.add('hidden');
  document.getElementById('find-angle').classList.add('hidden');
  document.getElementById('find-hypotenuse').classList.remove('hidden');
});

document.getElementById('submit-hypotenuse').addEventListener('click', findHypotenuse);

function findHypotenuse() {
  //take base and perpendicular value from user
  var base = document.getElementById('base-hypo').value;
  var perpendicular = document.getElementById('perpendicular-hypo').value;

  //validations
  if (base == '' || perpendicular == '') {
    document.getElementById('output-area').innerText = 'Please provide all inputs!';
  } else if (base == 0 || perpendicular == 0) {
    document.getElementById('output-area').innerText = 'Sides cannot be ZERO! Please try again!';
  } else {
    //calculate hypotenuse
    var hypotenuse = Math.sqrt(Math.pow(Number(base), 2) + Math.pow(Number(perpendicular), 2)).toFixed(2);
    //display hypotenuse
    document.getElementById('output-hypotenuse').innerText = 'The Hypotenuse is : ' + hypotenuse + ' units';
  }
}

/** End find hypotenuse */

/** Start area of triangle */

document.getElementById('area-of-triangle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('area-triangle').classList.remove('hidden');
  document.getElementById('check-triangle').classList.add('hidden');
  document.getElementById('triangle-type').classList.add('hidden');
  document.getElementById('find-angle').classList.add('hidden');
  document.getElementById('find-hypotenuse').classList.add('hidden');
});

document.getElementById('submit-area').addEventListener('click', areaOfTriangles);

function areaOfTriangles() {
  //take base and height value from user
  var base = document.getElementById('base').value;
  var height = document.getElementById('height').value;

  //validations
  if (base == '' || height == '') {
    document.getElementById('output-area').innerText = 'Please provide all inputs!';
  } else if (base == 0 || height == 0) {
    document.getElementById('output-area').innerText = 'Sides cannot be ZERO! Please try again!';
  } else {
    //calculate area
    var area = Number(base) * Number(height) * 0.5;
    //display area
    document.getElementById('output-area').innerText = 'The Area of the triangle is : ' + area + ' square units';
  }

  base.value = '';
  height.value = '';
}

/** End area of triangle */
