import { FETCH_POSTS} from "../actions/types";



const initailState={
    items:[],
    item:{}
}


const postReducer = (state=initailState,action)=>{
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items:action.payload
            };
       default:
           return state;
    }

}

export default postReducer;