var grid = document.getElementById('grid');
var arr_output = document.getElementById('arr_out');
var grid_output = document.getElementById('grid_out');
var grabBtn = document.getElementById('grab');
var color_vals = document.getElementById('color_vals');
var grab_output = document.getElementById('grab_out');
var rendBtn = document.getElementById('render');
var rend_output = document.getElementById('rend_out');
var newPatBtn = document.getElementById('new_pat');
var num_colors = document.getElementById('num_colors');

var bitsPlease = [
  [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    0,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    2,
    2,
    2,
    2,
    0,
    0,
    2,
    2,
    2,
    0,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    0,
    0,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ],
  [
    2,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    2
  ],
  [
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    2
  ],
  [
    2,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    2
  ],
  [
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2
  ],
  [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ]
]

function pad(n, width) {
  n = n + '';
  return n.length >= width
    ? n
    : new Array(width - n.length + 1).join('0') + n;
}

var sessionInit = function() {
  var big_board = bitsPlease;
  var newGame = {
    drawGridOutput: function(input_board) {
      while (grid_output.firstChild) {
        grid_output.removeChild(grid_output.firstChild);
      }
      var rand = 0
      var str = ''
      for (var i = 0; i < input_board.length; i++) {
        var newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        grid_output.appendChild(newRow);
        for (var j = 0; j < input_board[0].length; j++) {
          var newCell = document.createElement('div');
          newCell.classList.add('displayCell');
          newCell.id = pad(i, 3) + '-' + pad(j, 3);
          if (input_board[i][j] == 1) {
            newCell.classList.add('blackCell');
          } else if (input_board[i][j] == 2) {
            newCell.classList.add('whiteCell');
          } else {
            rand = Math.floor(Math.random() * num_colors.value) + 1
            if (rand == 1) {
              big_board[i][j] = 3
            }
            if (rand == 2) {
              big_board[i][j] = 4
            }
            if (rand == 3) {
              big_board[i][j] = 5
            }
            str = 'flashingCell' + rand.toString();
            newCell.classList.add(str);
          }
          newRow.appendChild(newCell);
        }
      }
    },
    drawGrab: function(object) {
      var c1 = object.c1;
      var c2 = object.c2;
      var c3 = object.c3;
      var b = JSON.parse(object.b);
      for (var i = 0; i < b.length; i++) {
        var newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        grab_output.appendChild(newRow);
        for (var j = 0; j < b[0].length; j++) {
          var newCell = document.createElement('div');
          newCell.classList.add('displayCell');
          if (b[i][j] == 1) {
            newCell.classList.add('blackCell');
          } else if (b[i][j] == 2) {
            newCell.classList.add('whiteCell');
          } else if (b[i][j] == 3) {
            newCell.style.backgroundColor = c1;
          } else if (b[i][j] == 4) {
            newCell.style.backgroundColor = c2;
          } else if (b[i][j] == 5) {
            newCell.style.backgroundColor = c3;
          }
          newRow.appendChild(newCell);
        }
      }
    },
    clearBoard: function() {
      board = [];
    },
    getBoard: function() {
      return board
    },
    getBigBoard: function() {
      return big_board
    },
    initialise: function() {
      session.clearBoard();
    },
    resetInputGrid: function() {
      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
    },
    resetOutputGrid: function() {
      while (grid_output.firstChild) {
        grid_output.removeChild(grid_output.firstChild);
      }
    },
    pushChar: function() {
      if (big_board.length == 0) {
        big_board = board;

      } else {
        for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board[0].length; j++) {
            big_board[i].push(board[i][j]);
          }
        }
      }
      session.resetInputGrid();
      session.clearBoard();
      arr_output.textContent = JSON.stringify(session.getBoard());
    },
    click: function(clicked) {
      var xVal = parseInt(clicked.id.substr(0, 3));
      var yVal = parseInt(clicked.id.substr(3, 3));
      if (board[xVal][yVal] === 0) {
        clicked.classList.add('blackCell');
        clicked.classList.remove('redCell');
        board[xVal][yVal] = 1;
      } else if (board[xVal][yVal] === 1) {
        clicked.classList.remove('blackCell');
        clicked.classList.add('redCell');
        board[xVal][yVal] = 2;
      } else if (board[xVal][yVal] === 2) {
        clicked.classList.remove('redCell');
        clicked.classList.remove('blackCell');
        board[xVal][yVal] = 0;
      }
    }
  }
  return newGame
}

var pickCell = function() {
  session.click(event.target);
}

var session = sessionInit();
session.initialise();
session.drawGridOutput(bitsPlease);

newPatBtn.addEventListener('click', function() {
  session.drawGridOutput(bitsPlease);
})

grabBtn.addEventListener('click', function() {
  while (grab_output.firstChild) {
    grab_output.removeChild(grab_output.firstChild);
  }
  var pix1val = window.getComputedStyle(document.getElementsByClassName('flashingCell1')[0]).backgroundColor;
  var pix2val = 'none';
  var pix3val = 'none';
  if (num_colors.value > 1) {
    pix2val = window.getComputedStyle(document.getElementsByClassName('flashingCell2')[0]).backgroundColor;
  }
  if (num_colors.value > 2) {
    pix3val = window.getComputedStyle(document.getElementsByClassName('flashingCell3')[0]).backgroundColor;
  }
  color_vals.value = '{ \"c1\": \"' + pix1val + '\", \"c2\": \"' + pix2val + '\", \"c3\": \"' + pix3val + '\", \"b\": \"' + JSON.stringify(session.getBigBoard()) + '\" }';
  session.drawGrab(JSON.parse(color_vals.value));
})

num_colors.addEventListener('click', function() {
  session.drawGridOutput(bitsPlease);
})

rendBtn.addEventListener('click', function() {
  while (rend_output.firstChild) {
    rend_output.removeChild(rend_output.firstChild);
  }
  html2canvas(grab_output, {
    onrendered: function(canvas) {
      rend_output.appendChild(canvas);
    }
  });
})
