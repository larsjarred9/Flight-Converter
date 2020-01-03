function calculate() {
	var destinationTime = 0;
	var localTimezone = document.getElementById("localtimezone").value;
	var destinationTime = document.getElementById("destinationtime").value;
	var number = Number(destinationTime);

	var localTime = new Date().toLocaleString("en-US", {timeZone: localTimezone});
	localTime = new Date(localTime);
	console.log(localTime.toLocaleString()); // Log local time

	if (destinationTime > 0) {
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
		var newDate = day+"/"+(month+1)+"/"+year+" "+hour+":"+minute;
		console.log(newDate);
		document.getElementById('destinationtimedisplay').innerHTML = "<h4>You will arive at around "+newDate+".</h4>\n<p>Based on your preferences</p>";
	}
	else {
		document.getElementById('destinationtimedisplay').innerHTML = "<p style='color: red;'>Your flight time must be at least 1 minute.</p>";
	}
}