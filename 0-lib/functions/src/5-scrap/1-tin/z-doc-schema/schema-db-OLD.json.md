const o = {
    ID: ,
    _0name: ,
    _1phone:,
    _2age:,
    // here : just all the DATA URLs
    _3img_tinder_dataUrl:,
    _3img_tinder_src:,
    _3img_tinderGallery_dataUrl:,
    _3img_tinderGallery_src:,
    // C est dans la fusion de la DB globale, que tout est assemble
    // _4img_zap_dataUrl: '',
    // _4img_zap_src: '',
    // _4img_zapGallery_dataUrl: [],
    // _4img_zapGallery_src: [],
    // _5img_instagram_dataUrl: '',
    // _5img_instagram_src: '',
    // _5img_instagramGallery_dataUrl: [],
    // _5img_instagramGallery_src: [],
    _6country: '',
    _7city:,
    _8distance:,
    //_9comment_axel: '',
    //_9comment_insta: '',
    _9comment_tinder:,
    _10cat_L0: '',
    // categorie
    //_10cat_L1: '',
    // rank inside categorie
    // uselfull to big-data,  A/B test, the best sentences
    _11chat_tinder_all: ,
    _11chat_tinder_my: '',
    _11chat_tinder_her: '',
    // _11chat_zap_all: [],
    // _11chat_zap_my: '',
    // _11chat_zap_her: '',
    // _11chat_insta_all: [],
    // _11chat_insta_my: '',
    // _11chat_insta_her: '',
    _12her_instagram_account: '',

    _99axel_account_fb: ''

//------------------------------------------

[
    '' : [{}, {}, {}],
'manaus' : [{}, {}, {}],
'porto alegre' : [{}, {}, {}],
null:  [{}, {}, {}], // n existe pas

]


//------------------------------------------



    [
    {
        "country": "countryA",
        "data": [
            {
                "city": "city",
                "data": [
                    {
                        "cat": "1", // pour culture, j ai categorie FONCTIONELLE (music, cine, theatre) et categorie PREFERENTIELLE (order)
                                    //pour meuf : CAT1 = les tres bonnes (puis par age), puis CAT2 (les moins bonnes)...
                        "data": [
                            {
                                "person": "phone-number",        // ID here ! // NO => car si j en ai plusieurs sans phone number, je suis ds la merde
                                "data": [
                                    {
                                        "ranking": [
                                            {
                                                "rank": "1"
                                            },
                                            {
                                                "comment": "j aime bien ca ou ca de cette meuf"
                                            }
                                        ],
                                        "information": [
                                            {
                                                "age": "-"
                                            },
                                            {
                                                "color-skin": "-"
                                            },
                                            {
                                                "tinder-description": ""
                                            }
                                        ],
                                        "images": [
                                            {
                                                "cat": "whatsapp",
                                                "data": [
                                                    "data-url",
                                                    "data-url",
                                                    "data-url"
                                                ]
                                            },
                                            {
                                                "cat": "tinder",
                                                "data": [
                                                    "data-url",
                                                    "data-url",
                                                    "data-url"
                                                ]
                                            }
                                        ],
                                        "contact": [
                                            {
                                                "zap": ""
                                            },
                                            {
                                                "tinder": ""
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {}
    ]
}
]
// faire fction : INJECT INTO:
//inject(oCtx, oValue)
//inject("country", "city", "category", "id-person", data-person)