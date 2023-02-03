import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users : [],
    isLoading: true,
    error: '',

  }

export const FetchUser = createAsyncThunk('fetchUser',async(message)=>{
        
        const res = await fetch('/getUsers')
        const result = await res.json();
        return result 
})

export const AddUser = createAsyncThunk('addUser',async(data)=>{
        const res = await fetch('/AddUser',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        const result = await res.json();
        return result;

})



const UserReducer = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers :{
        [FetchUser.fulfilled] : (state, action) =>{
            state.isLoading = false
            state.users = action.payload
            if(action.payload.error){
                console.log('call')
                state.error = action.payload.error
            }
        },
        [FetchUser.pending] : (state, action) =>{
            state.isLoading = true
        },
        [AddUser.fulfilled] : (state,action)=>{
                console.log(action.payload)

        }
    }
})


// export const {} = UserReducer.actions
export default UserReducer.reducer;
  
