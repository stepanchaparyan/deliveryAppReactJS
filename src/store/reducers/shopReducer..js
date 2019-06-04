const initialState = {
    shops:[
        {
            name: 'Nairi',
            city: 'Vanadzor',
            address: 'Aghayan 67'
        },
        {
            name: 'Arevik',
            city: 'Vanadzor',
            address: 'Tigran Mets 79'
        },
        {
            name: 'Viva',
            city: 'Tashir',
            address: 'Tumanyan 38'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SHOP':
            return {
                ...state,
                shops: [...state.shops, action.value]
            }
        default:
            return state
    }
};

export default reducer;

 