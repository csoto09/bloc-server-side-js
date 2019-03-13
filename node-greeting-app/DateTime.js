exports.currentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'} 

    console.log(`The current date is: ${today.toLocaleDateString('en-US', options)}`)
}

exports.currentTime = () => {
    const time = new Date().toLocaleTimeString('en-US');

    console.log(`The current time is: ${time}`);
}

exports.utc = () => {
    const utc = new Date().toUTCString();

    console.log(`The current date and time in GMT is: ${utc} `);
    
}