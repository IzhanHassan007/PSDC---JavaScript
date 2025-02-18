// As a user , I want to see Alarm for different Days of Week

// Create a variable

// if day is Sat or Sun, Console(Wake up at 10AM)

let dayOfWeek = "Monday"

switch(true){
    case (dayOfWeek == "Saturday") || (dayOfWeek == "Sunday"):
        console.log("wake up at 10AM")
        break;
    case dayOfWeek == "Monday":
        console.log("wake up at 8AM")
        break;    
    case (dayOfWeek == "Tuesday") || (dayOfWeek == "Wednesday"):
        console.log("wake up at 9AM")
        break;
    case dayOfWeek == "Thursday":
        console.log("wake up at 9:30AM")
        break;
    case dayOfWeek == "Friday":
        console.log("wake up at 8:30AM")
        break;
        default:
            console.log("No Alarm Set for This Day")
}

