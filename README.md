# SiteFlow Site Carousel #

## Description ##
SiteFlow is an HTML and Javascript based site display carousel that shows sites
randomly.

SiteFlow contains an iframe in index.html that shows the selected site. Sites are
shown as is. No speed or size enhancements available.

## Installation ##
Drop code folder into webroot and load the index.html file using a browser, either over the
network or directly from HDD.

## Configuration ##
Configuration is done through editing the file 'config/config.js'.

#### Example ####

     var site_config = {
          sites: [
              "http://www.vg.no",
              "http://www.db.no"
          ]
     };

#### Section 'sites' ####
This section holds the list of available site to be selected at
random.

### Page refresh rate ###

Changing the page refresh rate is done through editing of the
HTML meta refresh option found in the header section of index.html.
Rate is given in seconds. Depending of the size pr. site consider
making this setting relatively high (above 60 seconds).

     "<meta http-equiv="refresh" content="60">"

