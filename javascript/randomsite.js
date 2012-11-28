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

/**
 * Format time pieces i "xx" format
 */
function formatTime(time)
{
    if(time < 10) time = "0" + time;
    return String(time);
}

/**
 * Testing current time is between opening hours - e.g. closed or not.
 */
function isSiteClosed(config)
{
    var dateObject = new Date();
    var current = parseInt(formatTime(dateObject.getHours()).concat(formatTime(dateObject.getMinutes())));
    var start   = parseInt(formatTime(config.lock.start));
    var end     = parseInt(formatTime(config.lock.end));
    var locked  = true;
    
    if(start >= end && current >= end && current < start)
    {
        locked = false;
    }
    else if (start <= end && current >= start && current >= end)
    {
        locked = false;
    }

    return locked;
}

/**
 * Fetch random site from a predefined list. If outside
 * opening hours a black page is shown instead. 
 */
function getRandomSite(viewportId)
{
    if(isSiteClosed(site_config) === true)
    {
        jQuery(viewportId).attr("src", "black.html");
    }
    else
    {
        var numberSites = site_config["sites"].length;
        var randomIndex = Math.floor(
                            (Math.random() * numberSites)
                        );

        jQuery(viewportId).attr("src", site_config["sites"][randomIndex]);
    }
}

jQuery(document).ready(function() { getRandomSite("#viewport"); });