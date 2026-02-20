// Using counter, create a clock that shows you the current time.

// it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function showTime(){
    const now = new Date()

    // 24 hours format
    let hours24 = pad(now.getHours());
    let minutes = pad(now.getMinutes());
    let seconds = pad(now.getSeconds());

    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12 hour format
    let hours12 = now.getHours();
    let ampm = hours12 < 12 ? "AM" : "PM";

    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // convert 0 → 12
    hours12 = pad(hours12);

    const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;


    console.clear();
    console.log("24-Hour Format:", time24);
    console.log("12-Hour Format:", time12);
}

setInterval(showTime, 1000);