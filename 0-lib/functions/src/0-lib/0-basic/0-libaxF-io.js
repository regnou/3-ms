//----------------------------------------------------------
//@- READ JSON
//----------------------------------------------------------
//Get a LOCAL JSON file //@(Request API + fetch)
//°-TODO THROW ERROR and we don't render (condition : data fail to load)
export async function readJson(filename_fullPath_str) {
 const request = new Request(filename_fullPath_str);  //var myRequest = new Request('./products.json');
 const response = await fetch(request);                //lcc('[DEBUG] @DbJsonFileReader => readed-file : ', FiLE)
 const json = await response.json();
 // ((s, col1 = 'yellow', icon = '📚', col2 = 'slategrey') => { console.log('%c | ' + '%c ' + ' [ ' + icon + ' ] ' + '%c ' + s, 'color:' + col1 + '; font-weight:bold', 'color:' + col2, 'color:' + col1 + ';') })
 //  (filename_fullPath_str + " : " + json.length + " contacts");
 //console.table(json.data);
 return json;
}


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