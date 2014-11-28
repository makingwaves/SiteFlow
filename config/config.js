/**
 * Main site configuration file
 *
 * This file contains only an array of which
 * sites to load and the applications own
 * configuration sets.
 */

var site_config = {
    sites: [
        /*
         * NOTE: Twitter username should be all in
         * lowercase. 
         */
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/twitter.html?user=utenriksdept",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/twitter.html?user=regjeringen",
                
        /*
         * Example: instagram
         */
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/instagram.html?user=5omdagen",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/instagram.html?user=nrkp3",
        
        /*
         * Example: flickr
         */
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/flickr.html?user=utenriksdept",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/flickr.html?user=soldatnytt",
        
        /**
         * Example: facebook
         */
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/facebook.html?user=Utenriksdepartementet",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/facebook.html?user=Forsvaret",
        
        /**
         * Example: weibo
         */
        "http://www.weibo.com/cctvxinwen",
        "http://www.weibo.com/u/1949297007",
        "http://www.weibo.com/u/2025994775",
        "http://www.weibo.com/u/1751195602",
        "http://www.weibo.com/u/3069348215",
        "http://www.weibo.com/rijiancao",
        "http://www.weibo.com/lifeweek",
        
        /**
         * Example: vkontakte. The user id can be hard to find, so - you might want to dig deep
         * in the HTML source of the desired profile to find it. Notice the leading "-" sign in front
         * of the user parameter in these URL's
         */
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/vkontakte.html?user=-205387401",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/vkontakte.html?user=-209326050",
        "file:///C:/Users/roger.johnsen/Devel/SiteFlow.git/social/vkontakte.html?user=-249140988",
        
        /*
         * Example: Ordinary web sites
         * Note: You don't have to put them into
         * bulk like this - feel freely to insert
         * them randomly in the source set.
         */
        "http://www.norge.fi",
        "http://www.norge.se"
    ],
    social: {
        flickr: {
            max_elements: 40,
            api_key: "<your_api_key_here. See README.md for further details>"
        },
        instagram: {
            max_elements: 40,
            image_size: 'small', // small|medium|large,
            access_token: '<your_access_token_here. See README.md for further details>',
            client_id: '<your_client_id_here. See README.md for further details>'
        }
    } 
};