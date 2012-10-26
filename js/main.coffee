$(document).ready ->
  meny = Meny.create
    menuElement: document.querySelector( '.meny' )
    contentsElement: document.querySelector( '.contents' )
    position: 'left'
    height: 200
    width: 260

  $('#logo').on 'click', (event) ->
    $(this).toggleClass('pull-right')
