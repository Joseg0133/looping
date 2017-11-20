function setup() {
createCanvas(500,400)
}

function draw() {
var x = 5;

background('white')
fill(250);


for (var row = 0; row <10; row+=1) {
if (row % 2 === 0 ) {
  var firstColor = 'red'
  var secondColor = 'white'
} else {
  var firstColor = 'white'
  var secondColor = 'red'
  
}

for (var count = 0; count < 10; count +=1){
  if (count % 2 ===0){
    fill(firstColor)
  } else {
    fill(secondColor)
  }
  rect(x + (50 * count), 50 * row,50,50)
  }
}
}