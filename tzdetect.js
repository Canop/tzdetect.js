// a small library using moment.js, detecting the user's timezone
// Repository : https://github.com/Canop/tzdetect.js
// It must be included between the moment-timezone.js script and the moment-timezone-data.js one.
// Usage :
//   tzdetect.names : an array of all available timezone id
//   tzdetect.matches(base) : returns an array of all timezones matching the user's one, or supplied base timezone
var tzdetect = {
	names: moment.tz.names(),
	matches: function(base){
		var results = [], now = Date.now(), makekey = function(id){
			return [0, 4, 8, -5*12, 4-5*12, 8-5*12, 4-2*12, 8-2*12].map(function(months){
				var m = moment(now + months*30*24*60*60*1000);
				if (id) m.tz(id);
				// Compare using day of month, hour and minute (some timezones differ by 30 minutes)
				return m.format("DDHHmm");
			}).join(' ');
		}, lockey = makekey(base);
		tzdetect.names.forEach(function(id){
			if (makekey(id)===lockey) results.push(id);
		});
		return results;
	}
};
