import { 
    ENTER_SEARCH_TERM, 
    RECEIVE_SUGGESTIONS, 
    REQUEST_SUGGESTIONS 
} from "../constants/searchActionTypes"

// Im Reducer passiert die meiste Applikationslogik, 
// weil hier der State geändert wird 
// Der Reducer sollte auf jeden Fall getestet werden. 

const searchReducer = (
    state = {
        suggestions: [],
        searchTerm: ""
    },
    action
) => {
    switch (action.type) {
        case ENTER_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm
            };

        case REQUEST_SUGGESTIONS:
            return {
                ...state,
                isFetching: true
            };

        case RECEIVE_SUGGESTIONS:
            return {
                ...state,
                isFetching: false,
                suggestions: action.suggestions
            };
         
        default: {
            return state;
        }
    }
};

export default searchReducer;