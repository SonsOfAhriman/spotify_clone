import axios from "axios";
import qs from "qs";

var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // Your client id
var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; // Your secret

async function authToken() {
  const auth_token = new Buffer(client_id + ":" + client_secret).toString(
    "base64"
  );

  const data = qs.stringify({ grant_type: "client_credentials" });

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth_token}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
}

export default async function spotifyApiCall(endpoint) {
  const token = await authToken();
  const url = `https://api.spotify.com/v1${endpoint}`;

  try {
    const getResponse = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return getResponse.data;
  } catch (error) {
    console.log(error);
  }
}
