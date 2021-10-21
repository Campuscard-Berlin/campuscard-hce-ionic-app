This is a little app which uses our Capacitor HCE plugin. Its main use is
testing.

To play with it, clone the repository, clone the plugin's repository next to it,
`npm i`, `npx ionic cap copy` and put the Android app on a phone. (It won't work
in a browser or on an iPhone.) Then, tap "change data" (very important, since
otherwise a variable in the plugin remains null when it shouldn't) and tap the
phone on a reader. You should see some sort of communication happening;
specifically, APDUs sent either way get logged immediately above the buttons.
(You can tap "clear" to, well, clear the log.)

If the reader you tap the phone onto is using the little Java reader-driving app
which we have also published on Github, then communication between the reader
and the phone should not merely occur but succeed, and the reader-driving app
should inform you that it read a string off the card.
