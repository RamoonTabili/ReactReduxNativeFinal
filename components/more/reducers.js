import { RESTAURANTS, START, FINISH, CELL_SELECT } from "./actions";

export default function reducers(initialState, action) {
    let newState = Object.assign({}, initialState);
    let newList = newState.restaurantList.slice();
    
    switch(action.type) {
        case RESTAURANTS:
            console.log(action.restaurants.total);
            let newSearch = action.restaurants.businesses;
            newState.restaurantList = newSearch;
            break;
        case START:
            console.log("Loading...");
            newState.isLoading = true;
            break;
        case FINISH:
            console.log("Done.");
            newState.isLoading = false;
            break;
        case CELL_SELECT:
            console.log(action.id);
            for (let i = 0; i < newList.length; i++) {
                let todo = newList[i];
                let id = action.id;
                if (todo.id == id) {
                    console.log("We got a match!!");
                    console.log(todo.id);
                    break;
                }
            }
            break;
        default:
            return initialState;
    }

    return newState;
}
