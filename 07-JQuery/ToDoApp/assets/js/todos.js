
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
})

$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove()
  })
  event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){ // 13 is enter key
    let todoText = $(this).val()
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
  }
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
