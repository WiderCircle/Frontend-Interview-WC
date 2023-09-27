import TextField from "@mui/material/TextField";
import SvgIcon from "@mui/material/SvgIcon";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Cake from "@mui/icons-material/Cake";
import Translate from "@mui/icons-material/Translate";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Delete from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { ReferralContext } from "./store";
import classNames from "classnames";

const ReferralFormMultiInputRow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex justify-between gap-5">{children}</div>;
};

const InputLabelWithIcon: React.FC<{
  Icon: typeof SvgIcon;
  label: string;
}> = ({ Icon, label }) => {
  return (
    <span>
      <Icon fontSize="small" className="mb-1 mr-2 text-gray" /> {label}
    </span>
  );
};

const backgroundColors = [
  "bg-green",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
];

const ReferralForm: React.FC<{
  index: number;
}> = ({ index }) => {
  const store = React.useContext(ReferralContext);
  if (!store) {
    return null;
  }
  const { state, dispatch } = store;
  const data = state.patients[index];
  if (!data) {
    return null;
  }
  return (
    <div className="flex flex-col items-center w-[782px] mx-auto bg-white rounded">
      <div className="flex w-full pr-6">
        <div
          className={classNames(
            backgroundColors[index],
            "text-white p-4 rounded-tl leading-8",
            data.collapsed && "rounded-bl"
          )}
        >
          {index + 1}
        </div>
        <div className="w-full text-blue-200 py-5 px-4">
          {`${data.firstName} ${data.lastName}`.trim() || "New Referral"}
        </div>
        {state.patients.length > 1 && (
          <IconButton
            className="self-center text-blue-400"
            onClick={() => {
              dispatch({ type: "deletePatient", index });
            }}
          >
            <Delete />
          </IconButton>
        )}
        <IconButton
          className="self-center text-blue-400"
          onClick={() => {
            dispatch({
              type: "updatePatient",
              index,
              patient: { collapsed: !data.collapsed },
            });
          }}
        >
          {data.collapsed ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
      </div>
      {!data.collapsed && (
        <div className="flex flex-col px-14 w-full text-blue-200 gap-5 pb-6 pt-2">
          <ReferralFormMultiInputRow>
            <TextField
              label={
                <InputLabelWithIcon Icon={AccountCircle} label="First Name" />
              }
              variant="standard"
              fullWidth
              required
              value={data.firstName}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { firstName: value },
                });
              }}
            />
            <TextField
              label={
                <InputLabelWithIcon Icon={AccountCircle} label="Last Name" />
              }
              variant="standard"
              fullWidth
              required
              value={data.lastName}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { lastName: value },
                });
              }}
            />
          </ReferralFormMultiInputRow>
          <ReferralFormMultiInputRow>
            <TextField
              label={<InputLabelWithIcon Icon={Cake} label="Date of Birth" />}
              variant="standard"
              fullWidth
              required
              value={data.dob}
              type="date"
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { dob: value },
                });
              }}
            />
            <TextField
              label={
                <InputLabelWithIcon Icon={Translate} label="Contact Language" />
              }
              variant="standard"
              fullWidth
              required
              value={data.language}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { language: value },
                });
              }}
            />
          </ReferralFormMultiInputRow>
          <ReferralFormMultiInputRow>
            <TextField
              label={<InputLabelWithIcon Icon={Phone} label="Phone" />}
              variant="standard"
              fullWidth
              required
              type="tel"
              value={data.phone}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { phone: value },
                });
              }}
            />
            <TextField
              label={<InputLabelWithIcon Icon={Email} label="Email" />}
              variant="standard"
              fullWidth
              required
              type="email"
              value={data.email}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: "updatePatient",
                  index,
                  patient: { email: value },
                });
              }}
            />
          </ReferralFormMultiInputRow>
          <TextField
            label="Notes/Reason"
            variant="standard"
            fullWidth
            value={data.notes}
            onChange={({ target: { value } }) => {
              dispatch({
                type: "updatePatient",
                index,
                patient: { notes: value },
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReferralForm;
