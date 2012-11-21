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

function isSiteClosed(config)
{
    var start = parseInt(config.lock.start);
    var end = parseInt(config.lock.end);
    var date_object = new Date();
    var current_time = parseInt(date_object.getHours() + "" + date_object.getMinutes());

    // console.log("Curr " + current_time);
    // console.log("Close " + start + " Open " + end);

    // Before midnight
    if(current_time >= start)
    {
        console.log("curr > start");
        return (current_time < end) ? true : false;
    }

    // After midnight
    else if(current_time <= start)
    {
        console.log('"curr < start');
        return (current_time < end) ? true : false;
    }
}

function getRandomSite(viewportId)
{
    if(isSiteClosed(site_config) === true)
    {
        jQuery(viewportId).attr("src", 'black.html');
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