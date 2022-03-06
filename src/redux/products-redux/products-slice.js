import { createSlice } from "@reduxjs/toolkit";
import productList from "../../db.json";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [...productList],
    },
    reducers: {
        addProduct(state, action) {
            state.items = [action.payload, ...productList];
            return action.payload;
        },
        removeProduct(state, action) {
            state.items = state.items.filter(
                item => item.id !== action.payload,
            );
        },
    },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
