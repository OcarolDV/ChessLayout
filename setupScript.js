var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd,
    onGameEnd: onGameEnd
  }

var board = null
var game = new Chess()
board = Chessboard('board', config);
