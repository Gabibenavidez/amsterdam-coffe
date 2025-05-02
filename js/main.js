// Smooth scroll on nav links (if using anchor links)
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 800);
    }
  });
});


// Gallery
$(function () {
  const $slider = $('.slider-track');
  const totalItems = $slider.children().length;
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);
  let currentSlide = 0;

  function updateSlider() {
    const offset = -(100 * currentSlide);
    $slider.css('transform', `translateX(${offset}%)`);
    $('#galleryCounter').text(`${currentSlide + 1} of ${totalSlides}`);
  }

  $('#nextBtn').click(function () {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  $('#prevBtn').click(function () {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  updateSlider();
});
