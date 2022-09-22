input.onButtonPressed(Button.A, function () {
    Logging = !(Logging)
    if (Logging) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let Logging = false
Logging = false
loops.everyInterval(60000, function () {
    if (Logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
basic.forever(function () {
	
})
