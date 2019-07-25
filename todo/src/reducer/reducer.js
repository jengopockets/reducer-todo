export const initialState = {
    todo: [
      {
        name: 'Dream',
        id: 1,
        completed: false
    },
    ]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = {
          name: action.payload,
          id: Date.now(),
          completed: false
        };
        return {
          ...state,
          todo: [...state.todo, newItem]
        };


      case 'TOGGLE_ITEM':
        return {
          ...state,
          todo: state.todo.map(item => {
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed
              };
            }
           
            return item;
          })
        };


      case 'CLEAR_COMPLETED':
        return {
          ...state,
          todo: state.todo.filter(item => !item.completed)
        };
      default:
        return state;
    }
  };