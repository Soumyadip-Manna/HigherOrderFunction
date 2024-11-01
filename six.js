const linkdinUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

const url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/';

function isValidUrl(input){
    return linkdinUrl.test(url);
}

if(isValidUrl(url)){
    console.log(`"${url}" is a valid LinkedIn profile url`);
}
else{
    console.log(`"${url}" is not valid LinkedIn profile url`);
}