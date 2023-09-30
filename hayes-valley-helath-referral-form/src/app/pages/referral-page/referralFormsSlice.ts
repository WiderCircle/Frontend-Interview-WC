import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReferralFormData {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    address1: string;
    city: string;
    state: string;
    zipcode: number | string;
    country: string;
    contacts: {
        active: boolean;
        type: 'phone' | 'email';
        value: string;
    }[];
    language: string;
    phone: string;
    email: string;
    notes: string;
}

export interface FormState {
    key: number;
    expanded: boolean;
    formData: ReferralFormData;
}

const initialFormData: ReferralFormData = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    address1: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    language: '',
    phone: '',
    email: '',
    contacts: [
        {
            active: true,
            type: 'phone',
            value: '',
        },
        {
            active: true,
            type: 'email',
            value: '',
        },
    ],
    notes: '',
};

const initialState: FormState[] = [
    {
        key: 1,
        expanded: true,
        formData: initialFormData,
    },
];

const referralFormsSlice = createSlice({
    name: 'referralForm',
    initialState,
    reducers: {
        formAdded: (state, action: PayloadAction<Partial<FormState>>) => {
            const largestKey = state.reduce((acc, form) => {
                if (form.key > acc) acc = form.key;
                return acc;
            }, 0);

            const newForm: FormState = {
                key: largestKey + 1,
                expanded: false, // Set it to false by default
                formData: initialFormData,
                ...action.payload,
            };
            state.push(newForm);
        },
        formRemoved: (state, action: PayloadAction<{ key: number }>) => {
            const index = state.findIndex((form) => form.key === action.payload.key);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        formUpdated: (state, action: PayloadAction<FormState>) => {
            const index = state.findIndex((form) => form.key === action.payload.key);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        formToggleExpand: (state, action: PayloadAction<{ key: number }>) => {
            state.map((form) => {
                if (form.key === action.payload.key) {
                    form.expanded = !form.expanded;
                }
                return form;
            });
        },
        formCollapseAll: (state) => {
            state.map((form) => {
                form.expanded = false;
                return form;
            });
        },
        formExpandLast: (state) => {
            state[state.length - 1].expanded = true;
        },
    },
});

export const {
    formAdded,
    formRemoved,
    formUpdated,
    formCollapseAll,
    formExpandLast,
    formToggleExpand,
} = referralFormsSlice.actions;
export default referralFormsSlice.reducer;
