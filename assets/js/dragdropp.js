/*=============================================================
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
   
    ========================================================  */
$('.drag').draggable({ 
  appendTo: 'body',
  helper: 'clone'
});

$('.dropzone').droppable({
  activeClass: 'active',
  hoverClass: 'hover',
  accept: ":not(.ui-sortable-helper)", 
  drop: function (e, ui) {
    comment = $(this).parent().parent().parent();
    if ( $( this ).text() == "") {
        var $el = $('<span id="'+ui.draggable.text()+'" class="drop-item"><a>' + ui.draggable.text() + '</a></span>');
    $el.append($('<button type="button" class="btn btn-danger btn-xs remove"><span style="color:white">X</span></button>').click(function () { $(this).parent().detach(); }));
    $(this).append($el);
    }
    
  }
}).sortable({
  items: '.drop-item',
  sort: function() {
    $( this ).removeClass( "active" );
  }
});