$(document).ready(function () {

  var scrollLink = $('.scroll');
  //Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 900)
  })

  //active link switching
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

      }
    })
  })
  
  $('#view-work').on('click', function () {
    const images = $('#portfolios').position().top;

    $('html, body').animate(
      {
        scrollTop: images
      }, 900)
  });

  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

  portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.add('image-blur');
    });

    portfolioItem.addEventListener('mouseout', () => {
      console.log(portfolioItem.childNodes[1].classList)
      portfolioItem.childNodes[1].classList.remove('image-blur');
    });
  });

})