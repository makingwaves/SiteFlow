/**
 * SiteFlow Site Carousel
 *
 * Main functionality for showing sites in an
 * iframe in an carousel manner.
 *
 * Company: Making Waves AS
 * Author: Roger C.B. Johnsen
 */

jQuery.noConflict();

/**
 * Fetch random site from a predefined list.
 */
function getRandomSite(viewportId)
{
    var numberSites = site_config["sites"].length;
    var randomIndex = Math.floor(
                        (Math.random() * numberSites)
                    );

    jQuery(viewportId).attr("src", site_config["sites"][randomIndex]);
}

jQuery(document).ready(function() { getRandomSite("#viewport"); });