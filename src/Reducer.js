const initialState = {
    color: "#000000"
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    if (type === "") {
        return [
            ...state,
            {
                color: '#0000FF'
            }
        ]
    }

    return state;
}