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

//Ask 3 angles from user
var angleOne = document.getElementById('ang1');
var angleTwo = document.getElementById('ang2');
var angleThree = document.getElementById('ang3');

document.getElementById('submit-sum').addEventListener('click', sumOfTriangles);

//add the values provided by user and check if triangle or not
function sumOfTriangles() {
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

/** End area of triangle */
