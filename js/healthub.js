let indexSlide = 1;
showSlide();

function nextSlide(n) {
  showSlide((indexSlide += n));
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('mair');
  console.log(listImage);

  if (n > listImage.length) indexSlide = 1;
}
