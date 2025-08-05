import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
    },
    addressInfo: {
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
    },
    accountInfo: {
        username: '',
        password: '',
    },
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addPersonalInfo: (state, action) => {
            state.personalInfo = { ...state.personalInfo, ...action.payload }
        },
        addAddressInfo: (state, action) => {
            state.addressInfo = { ...state.addressInfo, ...action.payload }
        },
        addAccountInfo: (state, action) => {
            state.accountInfo = { ...state.accountInfo, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { addPersonalInfo, addAddressInfo, addAccountInfo, resetForm } = formSlice.actions;
export default formSlice.reducer;