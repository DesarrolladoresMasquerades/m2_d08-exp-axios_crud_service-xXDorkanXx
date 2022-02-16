const axios = require("axios");

// axios is the nice fetch()!

class CharactersApi {
    constructor(
        baseUrl = process.env.API_URL,
        API_KEY = process.env.API_KEY,
        API_USER = process.env.API_USER
    ){
        this.baseUrl = baseUrl; // || "https://ih-crud-api.herokuapp.com";
        this.API_KEY = API_KEY; // "default key"
        this.API_USER = API_USER; // "default user"

        this.api = axios.create({baseUrl: `${this.baseUrl}`}); // Typical connection string requires keys etc...  `${this.baseURL}/?key=${API_KEY}`
        
    }

    getAllCharacters = ()=> this.api.get("/characters") //Name of function should be descriptive of your service
    getOneCharacter = (id)=>{
        return this.api.get(`/characters/${id}`)
    }
    createOneCharacter = ()=>{}
    updateOneCharacter = ()=>{}
    deleteOneCharacter = ()=>{}
}

module.exports = CharactersApi;
