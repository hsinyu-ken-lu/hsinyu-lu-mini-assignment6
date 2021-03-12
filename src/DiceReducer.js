const init = {
    sum:0, 
    arr:[]
}

export default function DiceReducer(state = init, action){
    if(action.type === 'ROLL'){
        return {
            sum: state.sum + action.val,
            arr: [...state.arr, action.val]
        }
    }else if(action.type === 'CLEAR'){  
        return {
            sum: 0,
            arr:[]
        }
    }
    return state;
}