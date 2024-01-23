import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: []
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.data.push({
                id: Date.now(),
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                dob: action.payload.dob
            })
        },
        editContact: (state, action) => {
            console.log("ACTION", action)
            state.data[action.payload.index] = {
                id: Date.now(),
                name: action.payload.formData.name,
                email: action.payload.formData.email,
                phone: action.payload.formData.phone,
                dob: action.payload.formData.dob

            }
        },
        deleteContact: (state, action) => {
            console.log("ACTION:",action.payload)
            state.data.splice(action.payload, 1)
        }
    }
})
const ContactReducer = contactSlice.reducer
export const {addContact, editContact, deleteContact} = contactSlice.actions

export default ContactReducer
// export contactSlice.action
/**
 * [
 *   {
 *      id: 'timestamp',
 *      name: '',
 *      email: '',
 *      phone: ''
 *      dob: ''
 *   }
 * 
 * ]
 * 
 * 
 */