const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add1':
            return state + 1;
        case 'remove1':
            return state - 1;
        case 'add10':
            return state + 10;
        case 'remove10':
            return state - 10;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

export default counterReducer;