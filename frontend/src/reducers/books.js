const books = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        default:
            return state;
    }
};

export default books;