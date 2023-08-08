import { createStore } from "redux"

const loadedImagesCounterReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case "ADD":
            return {
                count: state.count+1
            }
        default:
            return {
                count: state.count
            }
    }
}

const store = createStore(loadedImagesCounterReducer);

export default store;