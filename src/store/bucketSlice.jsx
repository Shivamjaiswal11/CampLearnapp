import { reset } from "./actions";

const { createSlice } = require("@reduxjs/toolkit");


const bucketSlice = createSlice({
    name: "bucket",
    initialState: [],
    reducers: {
        addToBucket(state, action) {
            const itempresent = state.find(item => item.id == action.payload.id)
            if (itempresent) {
                itempresent.quantity += 1;
            }
            else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromBucket(state, action) {
            const existingitemindex = state.findIndex(item => item.id == action.payload.id)
            if (existingitemindex != -1) {
                const existitem = state[existingitemindex]
                if (existitem.quantity == 1) {
                    state.splice(existingitemindex, 1)
                }
                else {
                    existitem.quantity -= 1;
                }

            }


        }
    },
    extraReducers(builder){
        builder.addCase(reset.toString(),(state, action) =>{
            return [];
        })
    }
})
export const { addToBucket,removeFromBucket } = bucketSlice.actions;
export const bucketReducer = bucketSlice.reducer;