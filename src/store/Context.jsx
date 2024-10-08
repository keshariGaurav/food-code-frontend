import { createContext, useReducer, useContext } from 'react';

export const initialState = {
    name: 'hello',
    price: 100,
    categories: [],
    alertBarContent: {
        active: false,
        type: 'success',
        message: '',
    },
    refreshAllMenuItems: false,
    email: '',
    loginRefresh: false,
    authenticated: null,
    navbarHeight: '0px',

    menuItem: {
        name: '',
        price: 1,
        categoryId: null,
        image: null,
        addOnItems: [],
    },
    bankDetails: {
        holderName: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
    },
    profileDetails: {
        cafeName: '',
        ownerName: '',
        contactNumber: '',
        email: '',
        address: '',
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
        case 'clear-menu-item': {
            let newState = { ...state };
            newState.menuItem = {
                name: '',
                price: 1,
                categoryId: null,
                image: null,
                addOnItems: [],
            };
            return newState;
        }
        case 'add-addon-item': {
            let newState = { ...state };
            let newAddonItems = [...newState.menuItem.addOnItems, action.payload.addOnItems];
            newState.menuItem = { ...newState.menuItem, addOnItems: newAddonItems };
            return newState;
        }
        case 'create-alert': {
            const payload = action.payload;
            let newState = { ...state };
            for (let [key, value] of Object.entries(payload)) {
                newState.alertBarContent[key] = value;
            }
            return newState;
        }
        case 'update-bank-details': {
            const payload = action.payload;
            let newState = { ...state };
            for (let [key, value] of Object.entries(payload)) {
                newState.bankDetails[key] = value;
            }
            return newState;
        }
        case 'update-profile-details': {
            const payload = action.payload;
            let newState = { ...state };
            for (let [key, value] of Object.entries(payload)) {
                newState.profileDetails[key] = value;
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
