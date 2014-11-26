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


## Social Account Setup ##

### Instagram ###

In order to make any use of Instagram we must configure it for our system. Here goes:

#### Creating an application ####
1. Visit http://instagram.com/developer/
2. Log in
3. Click the 'Manage Clients' button.
4. Click the 'Register a New Client' button.
5. Fill in the form: both 'Website' and 'Oauth redirect_uri' should be set to 'http://localhost'. Make sure the checkbox 'Disable implicit OAuth' is checked.
6. Enter Captcha.
7. Click the 'Register' button.
8. On the following screen, copy the 'Client ID' and paste this into the config.js file under the social->instagram->client_id setting.

#### Getting access token ####

1. Follow this tutorial: http://jelled.com/instagram/access-token
2. Copy and paste the access token into the config.js file under the social->instagram->access_token setting (if you can't find it, look at the URL).
3. Done. Rock and roll.

### Flickr ###

In order to make any use of Flickr we must configure it for our system. Here goes:

1. Log into your Flickr account
2. Go to https://www.flickr.com/services/apps/create/ and requst an API key
3. Next, apply for an non commercial key
4. Fill out the form.
5. Copy and paste the API key into the config.js file under the social->flickr->api_key setting (if you can't find it, look in the URL).


