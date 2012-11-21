# Snarx Site Carousel #

## Landing pages ##
 * index.html - cookie based for server use
 * local.html - sessvars based for non servers


## Configuration ##

### Available sites ###
Sites available to this carousel is defined in the Javascript file 'config/config.js'. Following
is an example how to add the sites of "Verdens Gang" and "Dagbladet":

var site_config = {
    sites: [
      'http://www.vg.no',
      'http://www.db.no'
    ]
};


### Page refresh rate ###

The number of seconds of between page refresh is configured directly in the HTML code
of each landing page (index.html, local.html).

Changing the refresh rate is done by looking for the following line and change the "content"
attribute:

    "<meta http-equiv="refresh" content="30">"

