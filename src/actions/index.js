import * as api from "../api"

export const getAllInfo = () => async(dispatch) => {
    try {
        const {data} = await api.getInfo();
        dispatch({type:'GET_ALL_INFO', payload: data})
        // console.log(data)
        // return {data}
    } catch (error) {
        console.log(error);
    }
}