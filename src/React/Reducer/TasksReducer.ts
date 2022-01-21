// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)
import {TaskType} from "../../types/types";

export const TasksReducer = (state: Array<TaskType>, action: generalType) => {
    switch (action.type) {
        case "REMOVE-TASK":
        case "REMOVE-TASK2":
        case "REMOVE-TASK3":
            // [...destructuring state.filter(id come to us from actionCreator)
            return [...state.filter(t => t.id !== action.id)]
        default:
            return state
    }
}

// bundle key-type for actions
type generalType = removeTaskActionType | ReturnType<typeof removeTaskAC2> | ReturnType<typeof removeTaskAC3>
//for each action need type-here we get type automatically
//note: ACTION, not the function returned ACTION
type removeTaskActionType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TASK', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK'
}

export const removeTaskAC2 = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TASK2', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK2'
}

export const removeTaskAC3 = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TASK3', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK3'
}