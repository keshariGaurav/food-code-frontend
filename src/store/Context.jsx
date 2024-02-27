import { createContext, useReducer, useContext } from 'react';

export const initialState = {
    name: 'hello',
    price: 100,
    categories: [],
    menuItem: {
        name: '',
        price: 1,
        category: null,
        image: [],
        addonItems: [
            {
                name: 'drink',
                Selection: 'single',
                items: [],
            },
        ],
    },
};
export const foodCodeReducer = (state, action) => {
    switch (action.type) {
        case 'update-root': {
            const payload = action.payload;
            let newState = { ...state };
            for (let [key, value] of Object.entries(payload)) {
                newState[key] = value;
            }
            return newState;
        }
        case 'create-menu-item': {
            const payload = action.payload;
            let newState = { ...state };
            for (let [key, value] of Object.entries(payload)) {
                newState.menuItem[key] = value;
            }
            return newState;
        }
    }
};

export const foodCodeContext = createContext();

export const FoodCodeProvider = (props) => {
    const [pageState, dispatch] = useReducer(foodCodeReducer, initialState);
    return (
        <foodCodeContext.Provider
            value={{
                pageState: pageState,
                dispatch: dispatch,
            }}
        >
            {props.children}
        </foodCodeContext.Provider>
    );
};

export default FoodCodeProvider;

export const useFoodCodeContext = () => useContext(foodCodeContext);
