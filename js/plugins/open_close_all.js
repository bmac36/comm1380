$('.closeall').click(function(){
  $('.collapse')
    .collapse('hide');
});
$('.openall').click(function(){
  $('.collapse:not(".in")')
    .collapse('show');
});