/**
 * Main site configuration file
 *
 * This file contains only an array of which
 * sites to load and the applications own
 * configuration sets.
 *
 */

var site_config = {
    sites: [
        /*
         * Example: Twitter Timelines for users
         * Note: You don't have to put them into
         * bulk like this - feel freely to insert
         * them randomly in the source set.
         *
         * NOTE: Twitter username should be all in
         * lowercase. 
         */
        "http://localhost:5000/twitter/tweets.html?user=utenriksdept",
        "http://localhost:5000/twitter/tweets.html?user=regjeringen",
        /*
        "http://localhost:5000/twitter/mfa-tweets.html?user=norway_uae",
        "http://localhost:5000/twitter/mfa-tweets.html?user=Luftforsvaret",
        "http://localhost:5000/twitter/mfa-tweets.html?user=heimevernet",
        "http://localhost:5000/twitter/mfa-tweets.html?user=NATO",
        "http://localhost:5000/twitter/mfa-tweets.html?user=HMKongensGarde",
        "http://localhost:5000/twitter/mfa-tweets.html?user=kriseinfo_no",
        */
        
        /*
         * Example: Ordinary web sites
         * Note: You don't have to put them into
         * bulk like this - feel freely to insert
         * them randomly in the source set.
         */
        "http://www.norsk.dk",
        "http://www.norge.dk",
        /*
        "http://www.norge.fi",
        "http://www.norja.fi",
        "http://www.norge.se",
        "http://www.noregur.is",
        "http://www.norway.is",
        "http://www.norway.az",
        "http://www.norwegen.or.at",
        "http://www.norvege.be",
        "http://www.noorwegen.be",
        "http://www.norveska.ba",
        "http://www.norvegia.bg",
        "http://www.norwegianembassy.hr",
        "http://www.noramb.cz",
        "http://www.norra.ee",
        "http://www.norvege.no",
        "http://www.norwegen.no",
        "http://www.norway.gr",
        "http://www.norvegia.hu",
        "http://www.norway.ie",
        "http://www.amb-norvegia.it",
        "http://www.norway-kosovo.no",
        "http://www.norvegija.lv",
        "http://www.norvegija.lt",
        "http://www.noorwegen.nl",
        "http://www.amb-norwegia.pl",
        "http://www.noruega.org.pt",
        "http://www.norvegia.ro",
        "http://www.2.norvegia.ro",
        "http://www.norvegia.ru",
        "http://www.norveska.org.rs",
        "http://www.norway.sk",
        "http://www.noruega.es",
        "http://www.amb-norwegen.ch",
        "http://www.norway.org.tr",
        "http://www.norway.com.ua",
        "http://www.norway.org.uk",
        "http://www.lookatnorway.org.uk",
        "http://www.norvege-algerie.org",
        "http://www.noruega.ao",
        "http://www.norway-egypt.org",
        "http://www.norway-eritrea.org",
        "http://www.norway.org.et",
        "http://www.ghana.norway.info",
        "http://www.norway.or.ke",
        "http://www.norway.mw",
        "http://www.norvege.ma",
        "http://www.norway.org.mz",
        "http://www.emb-norway.com.ng",
        "http://www.norway.org.za",
        "http://www.norway-south-sudan.org",
        "http://www.norway-sudan.org",
        "http://www.norway.go.ug",
        "http://www.norway.go.ts",
        "http://www.norway.org.zm",
        "http://www.norway.org.zw",
        "http://www.noruega.org.ar",
        "http://www.noruega.org.br",
        "http://www.emb-norway.ca",
        "http://www.emb-norvege.ca",
        "http://www.noruega.cl",
        "http://www.noruega-cuba.org",
        "http://www.noruega.org.gt",
        "http://www.norway.org.mx",
        "http://www.norway.org",
        "http://www.noruega.org.ve",
        "http://www.noruega.co.ve",
        "http://www.norway.org.af",
        "http://www.norway.org.bd",
        "http://www.norway.cn",
        "http://www.norway.org.cn",
        "http://www.norwayemb.org.in",
        "http://www.norway.or.id",
        "http://www.norwegia.or.id",
        "http://www.norway-iran.org",
        "http://www.norway.org.il",
        "http://www.norway.or.jp",
        "http://www.norway.jo",
        "http://www.norvegia.kz",
        "http://www.norway-lebanon.org",
        "http://www.norway.org.my",
        "http://www.norway.org.np",
        "http://www.norway.org.pk",
        "http://www.norway.org.ps",
        "http://www.norway.ph",
        "http://www.norway.or.kr",
        "http://www.al-norwige.org.sa",
        "http://www.norway.org.sg",
        "http://www.norway.sg",
        "http://www.norway.lk",
        "http://www.norway-sy.org",
        "http://www.emb-norway.or.th",
        "http://www.norway.org.tr",
        "http://www.norway.ae",
        "http://www.norway.org.vn",
        "http://www.norway.org.au",
        "http://www.norway-coe.org",
        "http://www.eu-norge.org",
        "http://www.eu-norway.org",
        "http://www.norway-nato.org",
        "http://www.norway-oecd.org",
        "http://www.norway-osce.org",
        "http://www.norway-un.org",
        "http://www.norway-geneva.org"
        */
    ]
};