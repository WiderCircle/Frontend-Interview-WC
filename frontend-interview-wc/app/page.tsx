"use client";

import "@fontsource/montserrat";
import ReferralForm from "./ReferralForm";
import React, { useCallback, useReducer, useState } from "react";
import Button from "@mui/material/Button";
import RoundedButton from "@mui/material-next/Button";
import { reducer, initialState, ReferralContext } from "./store";

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sentReferrals, setSentReferrals] = useState(0);
  const onSubmitReferrals = useCallback(() => {
    const url = "/api/referrals";
    const patients = state.patients.map((patient) => {
      const dob = patient.dob.split("-").map(Number);
      return {
        firstName: patient.firstName,
        lastName: patient.lastName,
        language: patient.language,
        dateOfBirth: {
          year: dob[0],
          month: dob[1],
          day: dob[2],
        },
        contacts: [
          {
            type: "sms",
            value: patient.phone,
          },
          {
            type: "email",
            value: patient.email,
          },
        ],
        notes: patient.notes,
      };
    });
    setSentReferrals(patients.length);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Patients: patients,
      }),
    });
  }, [state]);
  return (
    <ReferralContext.Provider value={{ state, dispatch }}>
      <main className="min-h-screen bg-blue-50 font-sans">
        <div className="flex flex-col items-center text-blue-500 bg-white py-14">
          <div className="text-3xl">Patient Referral Form</div>
          <div className="text-2xl">Hayes Valley Health San Francisco</div>
        </div>
        {sentReferrals > 0 && (
          <div className="bg-green text-white w-[828px] mx-auto text-center py-4 rounded-b-[48px] mb-24">
            Success! You have submitted {sentReferrals} pending referral
            {sentReferrals !== 1 && "s"}. You will be notified once they{"'"}ve
            been approved
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-blue-500 py-8">
            <div className="text-2xl">Referral Patients</div>
            <div className="text-xl">
              You can add up to five patients at a time
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {state.patients.map((patient, index) => (
              <ReferralForm key={patient.id} index={index} />
            ))}
          </div>
          <Button
            variant="text"
            className="text-blue-500 mt-3 font-sans"
            onClick={() => {
              dispatch({ type: "addPatient" });
            }}
          >
            + ADD ANOTHER PATIENT
          </Button>
          <RoundedButton
            variant="filled"
            className="bg-blue-500 hover:bg-blue-300 w-[782px] my-10 font-sans"
            onClick={onSubmitReferrals}
          >
            SEND REFERRALS
          </RoundedButton>
        </div>
      </main>
    </ReferralContext.Provider>
  );
};

export default Home;
