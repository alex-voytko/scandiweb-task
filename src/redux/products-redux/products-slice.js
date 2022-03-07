import { createSlice } from "@reduxjs/toolkit";
import productList from "../../db.json";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [...productList],
    },
    reducers: {
        fetchProducts(state) {
            return state.items;
        },
        addProduct(state, action) {
            state.items = [action.payload, ...state.items];
        },
        resetAllToggles(state) {
            const newArr = [];
            state.items.forEach(item => {
                newArr.push({ ...item, isMarked: false });
            });
            state.items = newArr;
        },
        onToggleToRemove(state, { payload }) {
            console.log(payload);
            const i = state.items.findIndex(item => item.id === payload.id);
            state.items[i].isMarked = payload.checked;
        },
        removeProducts(state, { payload }) {
            state.items = state.items.filter(item => item.isMarked === payload);
        },
    },
});

export const {
    addProduct,
    removeProducts,
    onToggleToRemove,
    resetAllToggles,
    fetchProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
