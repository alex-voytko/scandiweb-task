import { createSlice } from "@reduxjs/toolkit";
import initialProductList from "../../db.json";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [...initialProductList],
        selectedProduct: {},
    },
    reducers: {
        selectProduct(state, { payload }) {
            state.selectedProduct = state.items.find(
                item => item.id === payload,
            );
        },
        addProduct(state, action) {
            state.items = [action.payload, ...state.items];
        },
        onToggleToRemove(state, { payload }) {
            console.log(payload);
            const i = state.items.findIndex(item => item.id === payload.id);
            state.items[i].isMarked = payload.checked;
        },
        resetAllToggles(state) {
            const newArr = [];
            state.items.forEach(item => {
                newArr.push({ ...item, isMarked: false });
            });
            state.items = newArr;
        },
        removeProducts(state, { payload }) {
            state.items = state.items.filter(item => item.isMarked === payload);
        },
        removeCurrentProduct(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
        },
    },
});

export const {
    selectProduct,
    addProduct,
    onToggleToRemove,
    resetAllToggles,
    removeProducts,
    removeCurrentProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
