<<<<<<< HEAD
$('body').prepend(firstListItem())
=======
$(document).prepend(lastImageSelector())
>>>>>>> 0c5c9a07d8edc9f9a12dfd439273ea5f334be017
var ans=firstListItem()

function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  return $('img:last')
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  return $('div.pics')
}

function firstListItem(){
<<<<<<< HEAD
  return $('ul#pic-list li:first')
=======
  return $('ul li:first')
>>>>>>> 0c5c9a07d8edc9f9a12dfd439273ea5f334be017
}