# Snarx Site Carousel #

## Description ##
Snarx is an HTML and Javascript based site display carousel.

## Landing pages ##
 * index.html - cookie based for server use
 * local.html - sessvars based for non servers

## Installation ##

### Server ###
Drop this application into webroot and use the landing page 'index.html' to serve content. 
Note: If you wish to avoid using cookies you can simply use 'local.html' (or just rename it).

### Local desktop ###
For local installation you can drop the application to anywhere sees fit. Load the 'local.html'
landing page by opening it as a file from your browser ('file:///path_to_landing_page)'.

## Configuration ##

### Available sites ###
Sites available to this carousel is defined in the Javascript file 'config/config.js'. Following
is an example how to add the sites of "Verdens Gang" and "Dagbladet":

#### Example ####

     var site_config = {
         sites: [
             'http://www.vg.no',
             'http://www.db.no'
         ]
     };

Snarx will load each site in order. Note: remember to terminate each line with an ',' - except for the last entry.

### Page refresh rate ###

The number of seconds of between page refresh is configured directly in the HTML code
of each landing page (index.html, local.html).

Changing the refresh rate is done by looking for the following line and change the 'content'
attribute:

    "<meta http-equiv="refresh" content="30">"

