import { Category } from "src/interfaces/templates"
import { connectedKnex } from "./knex"


export const getAllCategories = () : Promise <Category[]> => {
     return connectedKnex("categories").select({id : "id", name : "name" })
}

export const getAllChildrens = (id : number) :  Promise <Category[]>  => {
     return connectedKnex("categories").where({parent_id : id}).select({id : "id", name : "name"})
}


