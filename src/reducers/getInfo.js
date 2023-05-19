const getInfoReducer = (state = {data:null}, action) => {
    switch(action.type){
        case "GET_ALL_INFO":
            return{...state, data:action.payload};
        default:
            return {...state}
    }
}

export default getInfoReducer;