# # red = P1
# # yellow = P2
# # green = P8
# def LED_on():
# pins.digital_write_pin(DigitalPin.P2, 1)
# pins.digital_write_pin(DigitalPin.P2, 1)
# pins.digital_write_pin(DigitalPin.P8, 1)
# #LED_On
# 
# def green():
# pins.digital_write_pin(DigitalPin.P1, 0)
# pins.digital_write_pin(DigitalPin.P2, 0)
# pins.digital_write_pin(DigitalPin.P8, 1)
# basic.show_string("R")
# # LED_green
# 
# def red_yellow():
# pins.digital_write_pin(DigitalPin.P1, 1)
# pins.digital_write_pin(DigitalPin.P2, 1)
# pins.digital_write_pin(DigitalPin.P8, 0)
# basic.show_string("R")
# basic.show_string("Y")
# # LED_RedYellow
# 
# def LED_off():
# pins.digital_write_pin(DigitalPin.P1, 0)
# pins.digital_write_pin(DigitalPin.P2, 0)
# pins.digital_write_pin(DigitalPin.P8, 0)
# # LED_off
# 
# def yellow():
# pins.digital_write_pin(DigitalPin.P1, 0)
# pins.digital_write_pin(DigitalPin.P2, 1)
# pins.digital_write_pin(DigitalPin.P8, 0)
# basic.show_string("G")
# # LED_Yellow
# 
# def red():
# pins.digital_write_pin(DigitalPin.P1, 1)
# pins.digital_write_pin(DigitalPin.P2, 0)
# pins.digital_write_pin(DigitalPin.P8, 0)
# basic.show_string("Y")
# # LED_Red
def LCD():
    makerbit.show_string_on_lcd1602("welcome to swc",
        makerbit.position1602(LcdPosition1602.POS1),
        16)
    makerbit.show_string_on_lcd1602("good morning",
        makerbit.position1602(LcdPosition1602.POS17),
        16)
    basic.pause(5000)
    makerbit.clear_lcd1602()
    makerbit.show_string_on_lcd1602("my name is:",
        makerbit.position1602(LcdPosition1602.POS1),
        16)
    makerbit.show_string_on_lcd1602("CXK", makerbit.position1602(LcdPosition1602.POS17), 16)
    basic.pause(5000)
    makerbit.clear_lcd1602()

def on_forever():
    LCD()
basic.forever(on_forever)
