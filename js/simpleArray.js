
let squareNums = [25, 36, 49, 64, 81, 100]
let squarePos = 0

function setup(){
createCanvas(windowWidth, windowHeight)


fill (200, 400, 100)
for(let i=0; i < squareNums.length; i++ ){
  squarePos += 40
  rect (0, squarePos, squareNums[i], 20)
  print (squarePos)
  text (str(squareNums[i]),squareNums[i]+10, squarePos+10)
}

}

function draw(){


}
