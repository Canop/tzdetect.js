tzdetect.js
===========

Goals
-----

* detect the user timezone, or more precisely list all IANA time zone ids that are compatible with the running javascript engine
* limit data duplication by using the Moment.js version of the Olson tables

Demo
----

See http://dystroy.org/stackoverflow/timezonedetect.html

Usage
-----

	<script src="moment-with-langs.min.js"></script>
	<script src="moment-timezone-with-data.min.js"></script>
	<script src="tzdetect.js"></script>
	<script>
		var tzid = tzdetect.matches()[0]; // for example : "Europe/Paris"
	</script>

Related
-------

	http://stackoverflow.com/questions/19420582/detect-the-id-of-the-current-user-timezone-using-moment-js
