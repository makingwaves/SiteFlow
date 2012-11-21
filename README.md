# Snarx Site Carousel #

Description:
Snarx is a tool for displaying a predefined list of sites in a carousel manner on a given
time interval.



## Configuration ##
### Available sites ###
Which sites to display and in which order is set in 'config/config.js' file of this
application.

var site_config = {
    sites: [
      'http://www.vg.no',
      'http://www.db.no'
    ]
};


### Page refresh rate ###

    To configure the page refresh timeout for this application you must identify the following line
    in either 'local.html' or 'index.html', and change the 'content' attribute to your needs (time
    in seconds):

    "<meta http-equiv="refresh" content="30">"

