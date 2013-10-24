$(document).ready(function(){
 $('#get_color').on('click', function(e){
  e.preventDefault();
  $.ajax({
    type: 'post',
    url: '/color'
  }).done(function(response) {
    console.log(response)
    $("ul li:nth-child(" + response.cell + ")" ).css('background', response.color)
  })
 })
});