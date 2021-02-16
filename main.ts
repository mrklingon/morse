function playCode (text: string) {
    for (let index = 0; index <= text.length; index++) {
        chr = text.charAt(index)
        if (chr == ".") {
            music.playTone(523, music.beat(BeatFraction.Eighth))
        }
        if (chr == "-") {
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString(code)
    playCode(code)
    basic.showString("" + (alphabet[morse.indexOf(code)]))
    Cword = "" + Cword + code
    Word = "" + Word + alphabet[morse.indexOf(code)]
    code = ""
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(Cword)
    basic.pause(100)
    basic.showString(Word)
    Cword = ""
    Word = ""
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (alphabet[ltr]))
    basic.showString("" + (morse[ltr]))
    ltr = (ltr + 1) % alphabet.length
})
let chr = ""
let morse: string[] = []
let code = ""
let Cword = ""
let Word = ""
let alphabet: string[] = []
let ltr = 0
ltr = alphabet.length
Word = ""
Cword = ""
code = ""
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
