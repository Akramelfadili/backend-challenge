import { Categorie } from "src/interfaces/templates"
import { connectedKnex } from "./knex"


export const getAllCategories = () : Promise <Categorie[]> => {
     return connectedKnex("categories").select({id : "id", name : "name" })
}


