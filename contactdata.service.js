

(function () {
    var app = angular.module("ContactApp");

    //Service service
    app.service("CotactdataSvc", function (AppNameSvc) {
        //var this={};
        this.contacts = [

            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "blake",
                    "last": "morris"
                },
                "location": {
                    "street": "7034 riccarton road",
                    "city": "christchurch",
                    "state": "gisborne",
                    "postcode": 49438
                },
                "email": "blake.morris@example.com",
                "login": {
                    "username": "brownkoala498",
                    "password": "dietcoke",
                    "salt": "2aFIA3Jt",
                    "md5": "233e91ee2723ddd487dd2d94fee07ab0",
                    "sha1": "05edc77338bacefc66a96f05cc3184da83dc4b95",
                    "sha256": "94d9dab1fb87fb8d9950dfbdb6416b034efcfb475bdabf53eb40f6ca9e2af7a9"
                },
                "dob": "1976-08-20 14:23:26",
                "registered": "2007-08-29 22:49:36",
                "phone": "(414)-812-0923",
                "cell": "(183)-356-5581",
                "id": 1,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/16.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "william",
                    "last": "bertrand"
                },
                "location": {
                    "street": "2246 boulevard de balmont",
                    "city": "poitiers",
                    "state": "manche",
                    "postcode": 88042
                },
                "email": "william.bertrand@example.com",
                "login": {
                    "username": "orangeswan725",
                    "password": "keng",
                    "salt": "xRhyA7do",
                    "md5": "b6a8ac02a5138c68c5a845acd0b0a66c",
                    "sha1": "0400c49dd11c30dfbd7f0648866502478263a2b2",
                    "sha256": "79906e9766a0251c2cba31ca837f439bf5e87510d6373d7aecae06b226d5d653"
                },
                "dob": "1961-10-11 05:39:56",
                "registered": "2007-03-09 16:43:01",
                "phone": "04-53-47-85-81",
                "cell": "06-15-77-50-28",
                "id": 2,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/35.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
                },
                "nat": "FR"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "millie",
                    "last": "lee"
                },
                "location": {
                    "street": "7744 mt albert road",
                    "city": "palmerston north",
                    "state": "west coast",
                    "postcode": 67753
                },
                "email": "millie.lee@example.com",
                "login": {
                    "username": "blackmouse207",
                    "password": "warriors",
                    "salt": "biPhrSwO",
                    "md5": "867c02d6948bdeb7cb03b0aade50e849",
                    "sha1": "338ee840ac4e89cb016a2029421d81d3e0e21e7d",
                    "sha256": "01a01c1dc2a460e4507a50d512b1bef1057c0bcb88feff6535852adcfaac54f8"
                },
                "dob": "1976-10-04 14:15:08",
                "registered": "2006-02-07 15:32:15",
                "phone": "(927)-200-8232",
                "cell": "(831)-863-9431",
                "id": 3,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/21.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "bryan",
                    "last": "henry"
                },
                "location": {
                    "street": "1679 pearse street",
                    "city": "clonmel",
                    "state": "south dublin",
                    "postcode": 63152
                },
                "email": "bryan.henry@example.com",
                "login": {
                    "username": "lazybutterfly907",
                    "password": "havefun",
                    "salt": "fHmVIU5s",
                    "md5": "c3d670c5832a0cc9ef1f176992cea71d",
                    "sha1": "59c1f19f6522983ab7001b24445e0e1bddc73ab1",
                    "sha256": "7e881ec998b7185e779478510b684f7376386bbea9e25dd8c57d0b6aef825d9c"
                },
                "dob": "1974-08-04 13:41:59",
                "registered": "2009-06-07 21:09:58",
                "phone": "041-392-5539",
                "cell": "081-142-1576",
                "id": 4,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/86.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
                },
                "nat": "IE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "monsieur",
                    "first": "léandre",
                    "last": "guerin"
                },
                "location": {
                    "street": "4586 avenue des ternes",
                    "city": "renens vd 1",
                    "state": "genève",
                    "postcode": 6026
                },
                "email": "léandre.guerin@example.com",
                "login": {
                    "username": "purplepeacock348",
                    "password": "mushroom",
                    "salt": "rRRDq3w1",
                    "md5": "73707c0b4047c708adc07bd582ba883e",
                    "sha1": "f68cd8447e90ecace15cb564844adc41dbc87a5b",
                    "sha256": "9d3ba4aa771a07e4bd23babd1feb3222d400a5b5a893587c6ada65010519897d"
                },
                "dob": "1949-07-27 17:47:07",
                "registered": "2008-06-14 17:04:09",
                "phone": "(367)-384-8012",
                "cell": "(358)-657-8808",
                "id": 5,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/17.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
                },
                "nat": "CH"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "veronica",
                    "last": "payne"
                },
                "location": {
                    "street": "7479 w pecan st",
                    "city": "scottsdale",
                    "state": "pennsylvania",
                    "postcode": 97219
                },
                "email": "veronica.payne@example.com",
                "login": {
                    "username": "beautifulpeacock641",
                    "password": "rightnow",
                    "salt": "35zkJJiy",
                    "md5": "0a726dc95466f4feedf3ce7162d5964e",
                    "sha1": "b6fb05281b48eb8e4de7783bcfd1aa24927b5544",
                    "sha256": "17c0876d4b179436e60fb51aa4c7bad3e7fb124ce1d72433d95d9dc2548e3f1c"
                },
                "dob": "1995-07-05 08:14:56",
                "registered": "2005-02-28 19:55:50",
                "phone": "(675)-418-6959",
                "cell": "(271)-026-3669",
                "id": 6,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/46.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
                },
                "nat": "US"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "maddison",
                    "last": "lane"
                },
                "location": {
                    "street": "7104 manor road",
                    "city": "lusk",
                    "state": "louth",
                    "postcode": 16965
                },
                "email": "maddison.lane@example.com",
                "login": {
                    "username": "browncat834",
                    "password": "chestnut",
                    "salt": "Ce495zbL",
                    "md5": "7d2ebce15471a0671a9c00e154e2acfb",
                    "sha1": "86ef6abc7e9f4da57426428795bb54339f10c673",
                    "sha256": "9d97cd1253832bf21c42d3c4120b163c32c11b2dd31591ee2c9650cbc8f614e7"
                },
                "dob": "1944-09-23 10:00:17",
                "registered": "2006-09-09 22:05:58",
                "phone": "011-729-3283",
                "cell": "081-226-5498",
                "id": 7,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/67.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
                },
                "nat": "IE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "mathias",
                    "last": "madsen"
                },
                "location": {
                    "street": "3789 skovgårdsvej",
                    "city": "viby j.",
                    "state": "syddanmark",
                    "postcode": 42041
                },
                "email": "mathias.madsen@example.com",
                "login": {
                    "username": "ticklishgoose431",
                    "password": "gobucks",
                    "salt": "yvc9P5d1",
                    "md5": "2a78f6c26657f2a13416b28355a51bb7",
                    "sha1": "7ac79b4eeb1f8bfee3bf93ff706ebee7c4e9187e",
                    "sha256": "39e241ac20e384015225bd87d003fe5f99da156d4161c225795b9861b9632448"
                },
                "dob": "1964-01-25 05:20:52",
                "registered": "2013-11-10 03:10:13",
                "phone": "47398223",
                "cell": "88644389",
                "id": 8,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/37.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
                },
                "nat": "DK"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "lester",
                    "last": "kelley"
                },
                "location": {
                    "street": "9357 dane st",
                    "city": "shepparton",
                    "state": "victoria",
                    "postcode": 8247
                },
                "email": "lester.kelley@example.com",
                "login": {
                    "username": "beautifulkoala261",
                    "password": "1017",
                    "salt": "gyBDz2w1",
                    "md5": "de94c6ba1f45ac0dfe8900a999b2fb12",
                    "sha1": "ea51bcdbdfc7211506a89a46ef95f24ba033f547",
                    "sha256": "45d05a6f91e82f32d0d6993916ab204759789e197c23135dc6ece99731ea02c9"
                },
                "dob": "1978-04-01 09:28:30",
                "registered": "2016-07-22 05:21:52",
                "phone": "01-7650-4382",
                "cell": "0402-217-805",
                "id": 9,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/50.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
                },
                "nat": "AU"
            },
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "izolita",
                    "last": "da paz"
                },
                "location": {
                    "street": "5446 rua primeiro de maio ",
                    "city": "almirante tamandaré",
                    "state": "goiás",
                    "postcode": 82417
                },
                "email": "izolita.dapaz@example.com",
                "login": {
                    "username": "blackmeercat817",
                    "password": "gore",
                    "salt": "zHVXi5qc",
                    "md5": "68d76403726725fadad802fe92c06fd9",
                    "sha1": "16bdec371ea85fa55c5d542c6b7854d5a2921f96",
                    "sha256": "8bd1f0fa429e165769a09e36bb54b3e93c2d8a15a5fabd11466206ba40ee846a"
                },
                "dob": "1945-04-11 04:28:48",
                "registered": "2003-07-11 01:23:45",
                "phone": "(92) 4700-2046",
                "cell": "(68) 7644-0929",
                "id": 10,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/66.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
                },
                "nat": "BR"
            }
        ];
    }
    );//new AppConfig(); call the service in constructor mode
})();