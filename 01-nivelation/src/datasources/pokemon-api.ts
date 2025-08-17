import { RESTDataSource } from "@apollo/datasource-rest";

export class PokemonAPI extends RESTDataSource {
    override baseURL = 'https://pokeapi.co/api/v2/';
    
    async getAllPokemons() {
        return this.get("pokemon")
    }
}