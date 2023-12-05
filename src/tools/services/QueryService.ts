import StatModel from "@/tools/models/StatModel"
import GoalModel from "../models/GoalModel"


export default class QueryService {

    static async query( argument:string ) {
        return argument.includes("@") ? await StatModel.search("email", argument) : await GoalModel.search("short-code", argument)
    }
}