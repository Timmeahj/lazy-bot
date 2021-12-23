// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

const lines = {
    'surprised': [
        'oh, echt?',
        'daar verschiet ik van',
        'dat had ik niet verwacht',
        'wie had dat kunnen bedenken',
        'ongelofelijk',
        'ola pola'
    ],
    'mad': [
        'dat kan toch niet.',
        'fuck dat',
        'Mannekes, mannekes',
        'Hoe durft die',
        'Zo krijg je me boos',
        'ik heb er genoeg van'
    ],
    'invested': [
        'euheu...... ja',
        'hmm',
        'zeg maar',
        'nou',
        'vertel',
        'o'
    ],
    'happy': [
        'Dat klinkt goed',
        'super!',
        'eindelijk!',
        'Ik ben blij voor je',
        'Daar word ik goed gezind van',
        'Goed nieuws!',
        'wauw!'
    ],
    'glad': [
        'Oef al maar goed',
        'oh ik dacht al',
        'gelukkig maar',
        'ik werd even bang',
        'mijn hart was al aan het tikken',
        'oef'
    ],
    'confused': [
        'Heu, hoezo?',
        'wat?',
        'wablieft?',
        'wie?',
        'wat bedoel je',
        'wacht, wat?'
    ],
    'gtfo': [
        'Sam is verdwenen, ik moet hem gaan zoeken!',
        'Ik moet morgen vroeg op, ik ga slapen!',
        'Shit ik ben mijn sleutels kwijt',
        'Volgens mij wil bob even wandelen',
        'Lasse heeft weer 10 autos vernield, ik moet gaan',
        'Mijn ribbetjes zijn aan het aanbranden!'
    ],
}

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
    // Get List of Voices
    voices = window.speechSynthesis.getVoices();

    // Initially set the First Voice in the Array.
    speech.voice = voices[15];

    // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
};

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        // Set the text property with the value of the textarea
        let line = '';
        switch (button.id){
            case 'surprised':
                line = lines.surprised[randomBetween(0, lines.surprised.length)];
                break;
            case 'happy':
                line = lines.happy[randomBetween(0, lines.happy.length)];
                break;
            case 'mad':
                line = lines.mad[randomBetween(0, lines.mad.length)];
                break;
            case 'glad':
                line = lines.glad[randomBetween(0, lines.glad.length)];
                break;
            case 'gtfo':
                line = lines.gtfo[randomBetween(0, lines.gtfo.length)];
                break;
            case 'invested':
                line = lines.invested[randomBetween(0, lines.invested.length)];
                break;
            case 'confused':
                line = lines.confused[randomBetween(0, lines.confused.length)];
                break;
        }
        console.log(line)
        speech.text = line;
        // Start Speaking
        window.speechSynthesis.speak(speech);
    });
});


function randomBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
