function calculate() {
	//Sets Destination time to zero and gets the value from all input elements
	var destinationTime = 0;
	var localTimezone = document.getElementById("localtimezone").value;
	var destinationTime = document.getElementById("destinationtime").value;
	var number = Number(destinationTime);
	//Makes all the strings of numbers into integer data

	var localTime = new Date().toLocaleString("en-US", {timeZone: localTimezone});
	localTime = new Date(localTime);
	console.log(localTime.toLocaleString()); // Log local time

	if (destinationTime > 0 && destinationTime < 1921) {
		localTime.setMinutes(localTime.getMinutes() + number); // timestamp
		localTime = new Date(localTime); // Date object
		console.log(localTime);
		var day = localTime.getDate(); //to get the day
		var month = localTime.getMonth(); // to get the month
		var year = localTime.getFullYear(); // to get the year
		var hour = localTime.getHours(); // to get the hours
		var minute = localTime.getMinutes(); // to get the minutes
		if (minute < 10) {
			minute = "0" + minute;
		}
		var newDate = day+"/"+(month+1)+"/"+year+" at "+hour+":"+minute;
		console.log(newDate);
		document.getElementById('destinationtimedisplay').innerHTML = "<h4>You will arive on the "+newDate+" <small>with the time used in "+localTimezone+"</small>.</h4>\n<p>This time has been caculated based on your inputs.</p>";
	}
	else {
		document.getElementById('destinationtimedisplay').innerHTML = "<p style='color: red;'>Your flight time must be at least 1 minute and maximum of 1920 minutes.</p>";
	}
}
