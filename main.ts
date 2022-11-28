// # red = P1
// # yellow = P2
// # green = P8
// def LED_on():
// pins.digital_write_pin(DigitalPin.P2, 1)
// pins.digital_write_pin(DigitalPin.P2, 1)
// pins.digital_write_pin(DigitalPin.P8, 1)
// #LED_On
// 
// def green():
// pins.digital_write_pin(DigitalPin.P1, 0)
// pins.digital_write_pin(DigitalPin.P2, 0)
// pins.digital_write_pin(DigitalPin.P8, 1)
// basic.show_string("R")
// # LED_green
// 
// def red_yellow():
// pins.digital_write_pin(DigitalPin.P1, 1)
// pins.digital_write_pin(DigitalPin.P2, 1)
// pins.digital_write_pin(DigitalPin.P8, 0)
// basic.show_string("R")
// basic.show_string("Y")
// # LED_RedYellow
// 
// def LED_off():
// pins.digital_write_pin(DigitalPin.P1, 0)
// pins.digital_write_pin(DigitalPin.P2, 0)
// pins.digital_write_pin(DigitalPin.P8, 0)
// # LED_off
// 
// def yellow():
// pins.digital_write_pin(DigitalPin.P1, 0)
// pins.digital_write_pin(DigitalPin.P2, 1)
// pins.digital_write_pin(DigitalPin.P8, 0)
// basic.show_string("G")
// # LED_Yellow
// 
// def red():
// pins.digital_write_pin(DigitalPin.P1, 1)
// pins.digital_write_pin(DigitalPin.P2, 0)
// pins.digital_write_pin(DigitalPin.P8, 0)
// basic.show_string("Y")
// # LED_Red
function LCD () {
    makerbit.showStringOnLcd1602("welcome to swc", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("good morning", makerbit.position1602(LcdPosition1602.Pos17), 16)
    basic.pause(5000)
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("my name is:", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("CXK", makerbit.position1602(LcdPosition1602.Pos17), 16)
    basic.pause(5000)
    makerbit.clearLcd1602()
}
function LED_OFF () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
function LED_ON () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
basic.pause(1000)
LED_OFF()
basic.pause(1000)
LED_ON()
LCD()
makerbit.showStringOnLcd1602("Temp:" + input.lightLevel(), makerbit.position1602(LcdPosition1602.Pos1), 16)
basic.pause(1000)
makerbit.clearLcd1602()
basic.forever(function () {
    makerbit.showStringOnLcd1602("" + (input.temperature()), makerbit.position1602(LcdPosition1602.Pos1), 16)
    basic.pause(1000)
    makerbit.clearLcd1602()
})
