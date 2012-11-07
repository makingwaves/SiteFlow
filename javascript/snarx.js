/**
 * Snarx Site Carousel
 *
 * Main functionality for showing sites in an
 * iframe in an carousel manner.
 *
 * Company: Making Waves AS
 * Author: Roger C.B. Johnsen
 */

jQuery.noConflict();

jQuery(document).ready(function() {
    window.setInterval(function() {
        window.location.reload();
    }, (site_config['interval']*1000));

    // Handle cookie information related to navigating the site array
    var cookie_name = 'snarx'
    var cookie = jQuery.cookie(cookie_name);
    var index  = 0;

    if(cookie) {
        var cookie_index = parseInt(cookie);

        if(cookie_index >= (site_config['sites'].length-1)) {
            index = 0;
        }
        else {
            index = cookie_index+1;
        }
    }

    jQuery.removeCookie(cookie_name);
    jQuery.cookie(cookie_name, index, { expires: 1, path: '/' });

    jQuery("#viewport").attr('src', site_config['sites'][index]);

});


