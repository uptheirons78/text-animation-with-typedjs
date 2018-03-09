var arr = [
    "Hi!",
    "I'm Mauro",
    "I'm a Full Stack Web Developer from Rome, Italy",
    "I really like Node.js",
    "React.js",
    "D3.js",
    "and everything about Javascript",
    "If you need help, just contact me!",
];
var typed = new Typed("#typed", {
        strings: arr,
        typeSpeed: 50,
        //backSpeed: 10,
        startDelay: 500,
        backDelay: 500,
        loop: true,
        fadeOut: true,
        cursorChar: '_',
        showCursor: true
    });