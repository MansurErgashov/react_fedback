const initialState = {
    navigate: [
        {
            id: 1,
            category: "all"
        },
        {
            id: 2,
            category:"UI"
        },
        {
            id: 3,
            category:"UX"
        },
        {
            id: 4,
            category:"enhancement"
        },
        {
            id: 5,
            category:"bug"
        },
        {
            id: 6,
            category:"feature"
        },
    ]
}

export const navReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NAVIGATE':
            return state.navigate;
        default: 
            return state
    }
}