//Question 1

const CORS_URL = "https://noroffcors.herokuapp.com/";

const API_URL = "https://elephant-api.herokuapp.com/elephants";

properURL = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(properURL);
  const results = await response.json();
  console.log(results);
}

getElephants();

//Question 2

const API_URL2 = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = {
  method: "GET",
  //url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
  //params: { term: "wat" },
  headers: {
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "a78a279fa2msh01ad676b0168516p12616bjsnc5a6c250f184",
  },
};

async function callUrbanDictionary() {
  const response = await fetch(API_URL2, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
