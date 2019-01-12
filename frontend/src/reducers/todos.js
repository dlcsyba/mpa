import update from 'immutability-helper';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id)
                ? {...todo, completed: !todo.completed} : todo);
            // return update(...state, {
            //     $set : {
            //         id: action.id,
            //         completed: action.completed
            //     }
            // });
        default:
            return state;
    }
};

export default todos;