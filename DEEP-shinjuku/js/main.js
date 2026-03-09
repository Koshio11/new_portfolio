$(document).ready(function () {
  let door = $(".door-left")

  door.click(function () {
    door.toggleClass("open")
  })
})

$(document).ready(function () {
  let door = $(".door-right")

  door.click(function () {
    door.toggleClass("open")
  })
})