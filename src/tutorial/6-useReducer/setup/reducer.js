// reducer function to handle any possible changes that might occur to the state all in one place
export const reducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        // Have to return some kind of state in reducer
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            showModal: true,
            modalContent: 'item added'
        };
    };

    if (action.type === 'NO_VALUE') {
        // Always have to set a value for state
        return { ...state, showModal: true, modalContent: 'Please Enter a value' };
    };

    if (action.type === 'CLOSE_MODAL') {
        // Always have to set a value for state
        return { ...state, showModal: false };
    };

    if (action.type === 'REMOVE_ITEM') {
        // Always have to set a value for state
        const newPeople = state.people.filter((person) =>
            person.id !== action.payload
        );
        return { ...state, people: newPeople };
    };

    // This is the default return [can have more than one action types]
    throw new Error('no matching action type found'); // return an error
}