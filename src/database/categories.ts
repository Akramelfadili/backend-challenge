import e from "express"
import { Categorie } from "src/interfaces/templates"
import { connectedKnex } from "./knex"


export const getAllCategories = () : Promise <Categorie[]> => {
     return connectedKnex("categories").select({id : "id", name : "name" })
}

export const getAllChildrens = (id : number) :  Promise <Categorie[]>  => {
     return connectedKnex("categories").where({parent_id : id}).select({id : "id", name : "name"})
}


