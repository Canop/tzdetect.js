tzdetect.js
===========


Warning
-------

This is experimental. This seems to work, as for now, but it's mostly the basis for the elaboration of something stronger, maybe a proper extension or plugin for Moment.js. Changes brought with ES6 are in the radar.

Goals
-----

* list all IANA time zone ids that are compatible with the javascript engine
* limit data duplication by using the Moment.js version of the Olson tables

Demo
----

See http://dystroy.org/stackoverflow/timezonedetect.html

Usage
-----

	tzid = tzdetect.matches()[0]; // gives the IANA name of a time zone compatible with the browser's one

Related
-------

	http://stackoverflow.com/questions/19420582/detect-the-id-of-the-current-user-timezone-using-moment-js
