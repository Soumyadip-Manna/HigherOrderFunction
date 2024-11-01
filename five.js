// URL validation.

const urlPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

const url = "https://pwskills.com";

function isvalidUrl (input) {
    return urlPattern.test(url);
}

if(isvalidUrl(url)){
    console.log(`"${url}" is a valid url`);
}
else{
    console.log(`"${url}" is not a valid url`);
}