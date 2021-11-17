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