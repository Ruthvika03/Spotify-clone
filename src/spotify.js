// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
"https://accounts.spotify.com/authorize"; // Redirects to spotify page when login button is clicked.

const redirectUri = "http://localhost:3000/"; // Redirects to home page once logged in.

const clientId = "3169bd1fc6cc415e9bcb03f269a4dede";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",];

export const getTokenFromUrl = () => {
   return window.location.hash
   .substring(1) // chopping the string
   .split("&")
   .reduce((initial, item) => {

    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]) ;

    return initial;
   }, {});

} //grabs the accessToken from url.

  
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;