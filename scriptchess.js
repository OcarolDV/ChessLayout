
var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd
  }

  
var board = null
var game = new Chess()

function makeRandomMove () {
  var possibleMoves = game.moves()

  // exit if the game is over
  if (game.game_over()) return

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])
  board.position(game.fen())

  window.setTimeout(makeRandomMove, 500)
}


function makeEnd(){
    game.game_over = true;
}

function makeDraggable(){
    board.draggable = true;
}

board = Chessboard('board', config);

makeDraggable();
$('#actualgame').on('click', makeDraggable);
$('#start').on('click', makeRandomMove);
$('#end').on('click', makeEnd);
$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);
$('#flipOrientationBtn').on('click', board.flip);

$('#sicilian').on('click', function(){
    board.start();
    board.orientation('black')
    board.move('c7-c5')
});

$('#stonewallAttack').on('click', function(){
    board.start();
    board.orientation('white')
    board.move('d2-d4')
    board.move('e2-e3')
    board.move('f2-f4')
    board.move('f1-d3')
    board.move('c2-c3')

    board.move('c7-c5')
    board.move('b8-c6')
    board.move('d7-d5')
    board.move('g8-f6')

});


