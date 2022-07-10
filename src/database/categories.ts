import { Category } from "src/interfaces/templates"
import { connectedKnex } from "./knex"


export const getAllCategories = () : Promise <Category[]> => {
     return connectedKnex("categories").select({id : "id", name : "name" })
}

export const getAllChildrens = (id : number) :  Promise <Category[]>  => {
     return connectedKnex("categories").where({parent_id : id}).select({id : "id", name : "name"})
}

export const getAllAncestors = (id : number) :  Promise <Category[]>=> {
     return connectedKnex("categories_closure")
          .join("categories", "categories_closure.ancestor_id", "=", "categories.id")
          .where("ancestor_id", "<>", id )
          .where({descendant_id : id})
          .select({id : "id", name : "name" })
}

