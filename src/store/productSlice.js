import { createSlice } from "@reduxjs/toolkit"


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: []
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        }
    }
})



export const { setProducts } = productSlice.actions
export default productSlice.reducer;


// Add
let gamesArr = [
    {
        id: 1,
        name: "Hi Stricker",
        src: "https://thumbs.dreamstime.com/z/hi-sticker-retro-style-vector-illustration-isolated-white-background-hi-sticker-retro-style-134866280.jpg",
    },
    {
        id: 2,
        name: "Puch Challange",
        src: "https://media.istockphoto.com/id/1017585700/photo/mma-fighter-boxing-knockout.jpg?s=612x612&w=is&k=20&c=0_4wSSCpOYgBshWnILyUy75Fp0kH8ac7tZ-7EsjCZkw=",
    },
    {
        id: 3,
        name:"Bow & Arrow",
        src: "https://t4.ftcdn.net/jpg/02/85/08/53/240_F_285085377_17QcPySxfoAHfFlqKQ2SZp2ln3U4ia1Z.jpg"
    }
];

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        try {
            dispatch(setProducts(gamesArr));
        } catch (err) {
            console.log(err);
        }
    }
}