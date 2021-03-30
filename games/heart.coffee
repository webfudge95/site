canvas = document.getElementById("game")
ctx = canvas.getContext("2d")
canvas.height = 500
canvas.width = 350
ctx.msImageSmoothingEnabled = false
ctx.imageSmoothingEnabled = false
x = (canvas.width / 2) - 20
y = (canvas.height / 2)
lives = 3
l = 0

active = ->
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineWidth = 5
  ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10)

drawHeart = ->
  width = 30
  height = 30

  ctx.beginPath()

  img = new Image()
  img.src = "assets/heart.png"

  ctx.drawImage(img, x, y, width, height)

drawUI = ->
  heart = new Image()
  heart.src = 'assets/life.png'
  width = 20
  height = 20
  ctx.beginPath()
  for life in [1..lives]
    ctx.drawImage(heart, 0 + (life * 20), 17, width, height)

drawScene = ->
  ctx.clearRect(0,0, canvas.width, canvas.height)
  active()
  if l == 30
    lives = 2
  if l == 60
    lives = 1
  if l == 90
    lives = 0
  drawUI()
  drawHeart()
  l = l + 1

setInterval(drawScene, 100)
