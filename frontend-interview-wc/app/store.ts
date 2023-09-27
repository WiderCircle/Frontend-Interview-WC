import React from "react";

export const ReferralContext = React.createContext<{
  state: ReferralState;
  dispatch: React.Dispatch<ReferralAction>;
} | null>(null);

export type Patient = {
  id: number;
  collapsed?: boolean;
  firstName: string;
  lastName: string;
  dob: string;
  language: string;
  phone: string;
  email: string;
  notes: string;
};

type ReferralState = {
  nextId: number;
  patients: Patient[];
};

type AddPatientAction = {
  type: "addPatient";
};

type UpdatePatientAction = {
  type: "updatePatient";
  index: number;
  patient: Partial<Patient>;
};

type DeletePatientAction = {
  type: "deletePatient";
  index: number;
};

export type ReferralAction =
  | AddPatientAction
  | UpdatePatientAction
  | DeletePatientAction;

export const reducer = (
  state: ReferralState,
  action: ReferralAction
): ReferralState => {
  switch (action.type) {
    case "addPatient":
      if (state.patients.length >= 5) {
        return state;
      }
      return {
        ...state,
        patients: [
          ...state.patients.map((patient) => ({
            ...patient,
            collapsed: true,
          })),
          {
            id: state.nextId,
            firstName: "",
            lastName: "",
            dob: "",
            language: "",
            phone: "",
            email: "",
            notes: "",
          },
        ],
        nextId: state.nextId + 1,
      };
    case "updatePatient":
      return {
        ...state,
        patients: state.patients.map((patient, index) => {
          if (index === action.index) {
            return {
              ...patient,
              ...action.patient,
            };
          }
          return patient;
        }),
      };
    case "deletePatient":
      return {
        ...state,
        patients: state.patients.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
};

export const initialState: ReferralState = {
  nextId: 2,
  patients: [
    {
      id: 1,
      firstName: "",
      lastName: "",
      dob: "",
      language: "",
      phone: "",
      email: "",
      notes: "",
    },
  ],
};
