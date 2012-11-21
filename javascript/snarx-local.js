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

function getSiteIndex() {

    if(typeof sessvars.pageindex == "undefined")
    {
        sessvars.pageindex = {current: -1};
    }

    if( sessvars.pageindex.current >= (site_config['sites'].length - 1) || sessvars.pageindex.current == -1)
    {
        sessvars.pageindex.current = 0;
    }
    else
    {
        sessvars.pageindex.current++;
    }

    return sessvars.pageindex.current;
}

jQuery(document).ready(function() {
    jQuery("#viewport").attr("src", site_config["sites"][getSiteIndex()]);
});