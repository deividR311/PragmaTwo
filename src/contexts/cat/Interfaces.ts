import { Cat } from "../../models/Cat";

export interface CatsState {
    cats : Cat[],
    cat  : Cat | null
}