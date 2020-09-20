[
    {
        "ID": 1,
        "_00country": "todo",
        "_01city": "todo",
        "_02name": "Bruninha",
        "_03age": "22",
        "_04phone": "todo",
        "_04phone_raw": "todo",
        "_05img_tinder_src": "https://images-ssl.gotinder.com/5e99cd3e566ce40100ccd5a0/original_11ab1bf8-2846-4fcc-a1f2-291bba6b88b6.jpeg",
        "_06status_tinder": "Técnica em enfermagem 👩🏼‍⚕️ %%% 22 Anos %%% _ Estou aqui só pelas amizades e por curiosidade hahay %%% A quarentena me trouxe até aqui.. %%% ",
        "_07instagram_account": "todo",
        "_07unofAppTinder_link": "http://localhost:3005/matches/5c8e8f2bf0956f11007a832c5e99cd3e566ce40100ccd5a0",
        "_07unofAppTinder_USER_link": "http://localhost:3005/matches/5c8e8f2bf0956f11007a832c5e99cd3e566ce40100ccd5a0",
        "_08distance": "",
        "_11chat_tinder_all": [
            "🌎Olá, em que cidade você esta ?\n",
            "Boa tarde\n",
            "Sou de Pinheiro\n",
            "Vc conhece ?\n",
            "Que legal, eu tambem ! Se você quiser podemos falar pelo whatsapp (eu vou te add) ?\nEu sou do Paris 🇫🇷\n",
            "98 984814171\n",
            "Eu raramente entro aqui\n",
            "Perdão pela demora\n"
        ]
    },

    // * here : just all the DATA URLs
    // * _3img_tinder_dataUrl: CONST_IMG_DATAURL_AVATAR,
    // * _3img_tinderGallery_dataUrl: CONST_ARR_IMG_DATAURL_GALLERY_ELT,
    // * _3img_tinderGallery_src: CONST_ARR_IMG_SRC_GALLERY_ELT,
    // * C est dans la fusion de la DB globale, que tout est assemble
    // * _4img_zap_dataUrl: '',
    // * _4img_zap_src: '',
    // * _4img_zapGallery_dataUrl: [],
    // * _4img_zapGallery_src: [],
    // * _5img_instagram_dataUrl: '',
    // * _5img_instagram_src: '',
    // * _5img_instagramGallery_dataUrl: [],
    // * _5img_instagramGallery_src: [],

    // * categorie
    // * _10cat_L1: '',
    // * rank inside categorie
    // * uselfull to big-data,  A/B test, the best sentences
    // * CHAT
    // * _11chat_zap_all: [],
    // * _11chat_zap_my: '',
    // * _11chat_zap_her: '',
    // * _11chat_insta_all: [],
    // * _11chat_insta_my: '',
    // * _11chat_insta_her: '',

    // * _9comment_axel: '',
    // * _9status_insta: '',

    {
        // const o = {
        // ID     : ,
        // _0name : ,
        // _1phone: ,
        // _2age  : ,
        // // here : just all the DATA URLs
        // _3img_tinder_dataUrl       : ,
        // _3img_tinder_src           : ,
        // _3img_tinderGallery_dataUrl: ,
        // _3img_tinderGallery_src    : ,
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
        _7city: '',
        _8distance: '',
        //_9comment_axel: '',
        //_9comment_insta: '',
        _9comment_tinder: '',
        _10cat_L0: '',
        // categorie
        //_10cat_L1: '',
        // rank inside categorie
        // uselfull to big-data,  A/B test, the best sentences
        _11chat_tinder_all: '',
        _11chat_tinder_my: '',
        _11chat_tinder_her: '',
        // _11chat_zap_all: [],
        // _11chat_zap_my: '',
        // _11chat_zap_her: '',
        // _11chat_insta_all: [],
        // _11chat_insta_my: '',
        // _11chat_insta_her: '',
        _12her_instagram_account: '',

        _99axel_account_fb: '',

        //------------------------------------------

        // [
        //     ''            : [{}, {}, {}],
        //     'manaus'      : [{}, {}, {}],
        //     'porto alegre': [{}, {}, {}],
        //     null          : [{}, {}, {}]   // n existe pas

        // ],

        //------------------------------------------

        [
            {
                "country": "countryA",
                "data": [
                    {
                        "city": "city",
                        "data": [
                            {
                                "cat": "1",   // pour culture, j ai categorie FONCTIONELLE (music, cine, theatre) et categorie PREFERENTIELLE (order)
                                //pour meuf : CAT1 = les tres bonnes (puis par age), puis CAT2 (les moins bonnes)...
                                "data": [
                                    {
                                        "person": "phone-number",   // ID here ! // NO => car si j en ai plusieurs sans phone number, je suis ds la merde
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
}
// faire fction : INJECT INTO:
//inject(oCtx, oValue)
//inject("country", "city", "category", "id-person", data-person)


// ! mandatory fields
// @ const CONST_IMG_GALLERY_SEL = '.slick-track'; // the parent
// @ NON-mandatory fields
// @ const S_boyChat = 'message__body';
// @ const S_girlChat = '';// const CONST_REGEXP_CITY = new RegExp(`${GLOBAL_CITY_RAW[j]}`,"g");
//   city = WORD.match(CONST_REGEXP_CITY);
//   @  ! match return array
//   @  ! null si no match
//   @  ! we stop loop if founded
// ? console.table(arrGlobal.data);
// ? console.log(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
// @ gallery : il faudra simuler le click sur le slider, pour faire loader les autres images
// @ const CONST_ARR_IMG_SRC_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>e.src);
// @ const CONST_ARR_IMG_DATAURL_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
// @ pour tinder, inutile binaire, car je crois, j ai acces depuis l URL
// @ const CONST_IMG_DATAURL_AVATAR = saveDataUrl(CONST_IMG_AVATAR_ELT);
// @  NON-mandatory fields



//*EEEEEEEEEEEEEEEEEEEEEENNNNNNNN        NNNNNNNNDDDDDDDDDDDDD
//.E::::::::::::::::::::EN:::::::N       N::::::ND::::::::::::DDD
//!E::::::::::::::::::::EN::::::::N      N::::::ND:::::::::::::::DD
//?EE::::::EEEEEEEEE::::EN:::::::::N     N::::::NDDD:::::DDDDD:::::D
//@- E:::::E       EEEEEEN::::::::::N    N::::::N  D:::::D    D:::::D
//-  E:::::E             N:::::::::::N   N::::::N  D:::::D     D:::::D
//=- E:::::::::::::::E   N::::::N N::::N N::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N:::::::N::::N  N::::::N  D:::::D     D:::::D
//*  E:::::::::::::::E   N::::::N  N::::N:::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N::::::N   N:::::::::::N  D:::::D     D:::::D
//   E:::::E             N::::::N    N::::::::::N  D:::::D     D:::::D
//   E:::::E       EEEEEEN::::::N     N:::::::::N  D:::::D    D:::::D
// EE::::::EEEEEEEE:::::EN::::::N      N::::::::NDDD:::::DDDDD:::::D
// E::::::::::::::::::::EN::::::N       N:::::::ND:::::::::::::::DD
// E::::::::::::::::::::EN::::::N        N::::::ND::::::::::::DDD
//*-EEEEEEEEEEEEEEEEEEEEEENNNNNNNN         NNNNNNNDDDDDDDDDDDDD
