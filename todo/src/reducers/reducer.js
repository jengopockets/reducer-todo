export const initialState = [
    {
        task: 'Learn About Reducers',
        completed: false,
        id: Date.now()
    }

]   

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, 
                {task: action.payload, completed: false, id: Date.now()
            }]
        case "TOGGLE_TODO":
            return state.map(item => item.id === action.payload ? {...item, completed:!item.completed} : item)
        case "REMOVE_TODO":
            return state.filter(item => item.completed === false)
            
        default:
            return state               
    }
}