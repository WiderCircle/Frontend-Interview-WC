import { createSlice } from '@reduxjs/toolkit'

export interface referralFormData {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    // dateOfBirth: {
    //     year: number
    //     month: number,
    //     day: number,
    // };
    address1: string;
    city: string;
    state: string;
    zipcode: number | string;
    country: string;
    contacts: {
        active: boolean,
        type: 'phone' | 'email'
        value: string
    }[],
    language: string;
    phone: string;
    email: string;
    notes: string;
}
export interface formState {
    key: number;
    expanded: boolean;
    formData: referralFormData;

}
const initialFormData: referralFormData = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    // dateOfBirth: {
    //     year: 0,
    //     month: 0,
    //     day: 0,
    // },
    address1: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    language: '',
    phone: '',
    email: '',
    contacts: [{
        active: true,
        type: 'phone',
        value: ''
    },
    {
        active: true,
        type: 'email',
        value: ''
    }],
    notes: '',
}
const initialState: formState[] = [
    {
        key: 1,
        expanded: true,
        formData: initialFormData
    }
]

const referralFormsSlice = createSlice({
    name: 'referralForm',
    initialState,
    reducers: {
        formAdded(state, action) {
            const largestKey = state.reduce((acc, form) => {
                if (form.key > acc)
                    acc = form.key;
                return acc;
            }, 0);//alternatively, we could recreate all of the keys every time a new object is added.

            const newForm = {
                key: largestKey + 1,
                formData: initialFormData,
                ...action.payload
            }
            state.push(newForm);
        },
        formRemoved(state, action) {
            const index = state.findIndex((form) => form.key === action.payload.key);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        formUpdated(state, action) {
            const index = state.findIndex((form) => form.key === action.payload.key);
            state[index] = action.payload;
        },
        formToggleExpand(state, action) {

            state.map((form) => {
                if (form.key == action.payload.key)
                    form.expanded = !form.expanded;
                return form;
            });
        },
        formCollapseAll(state) {
            state.map((form) => {
                form.expanded = false;
                return form;
            });
        },
        formExpandLast(state) {
            state[state.length - 1].expanded = true;
        }
    },
});


export const { formAdded, formRemoved, formUpdated, formCollapseAll, formExpandLast, formToggleExpand } = referralFormsSlice.actions;
export default referralFormsSlice.reducer;