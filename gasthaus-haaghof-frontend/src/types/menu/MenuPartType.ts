import {MealType} from "./MealType";

export interface MenuPartType {
    id: number,
    heading: string,
    meal: Array<MealType>,
}
