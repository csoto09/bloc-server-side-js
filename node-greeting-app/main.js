const greetings = require('./greeting.js');
const dt = require('./DateTime.js');

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Halló"
greetings.greetingIcelandic();

// Local Date
dt.currentDate();

// Local Time
dt.currentTime();

// DateTime in UTC
dt.utc();