
export const addBook = (id, text) => ({
    type: 'ADD_BOOK',
    id,
    text
});

export const addTodo = (id, text) => ({
    type: 'ADD_TODO',
    id,
    text
});

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};