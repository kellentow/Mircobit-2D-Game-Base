let Line_Helper = 0
let Player_X = 0
let Player_Y = 0
function horizontal_line_Y_X1_X2 (y: number, x1: number, x2: number) {
    Line_Helper = x1
    for (let index = 0; index < x2 - x1 + 1; index++) {
        led.plot(Line_Helper - Player_X, y - Player_Y)
        Line_Helper += 1
    }
}
function vertical_line_X_Y1_Y2 (x: number, y1: number, y2: number) {
    Line_Helper = y1
    for (let index = 0; index < y2 - y1 + 1; index++) {
        led.plot(x - Player_X, Line_Helper - Player_Y)
        Line_Helper += 1
    }
}
function Draw_Point_X_Y (x: number, y: number) {
    led.plot(x - Player_X, y - Player_Y)
}
basic.forever(function () {
	
})
