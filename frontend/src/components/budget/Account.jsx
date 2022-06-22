import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";

// TO DO: fetch all datev accounts from db

// Dummy data for accounts
const datevAccounts = [
  { label: "1000 Fremdleistungen", id: 1 },
  { label: "2000 Streaming", id: 2 },
  { label: "2050 Systemgebühren", id: 3 },
  { label: "3000 Rechts- und Beratungskosten", id: 4 },
  { label: "3999 Beratung IT", id: 5 },
  { label: "3490 Krankengeldzuschüsse", id: 6 },
  { label: "4000 Versorgungskassen", id: 7 },
  { label: "4576 Pauschale Steuer für Versicherungen", id: 8 },
  { label: "5672 Unentgeltliche Wertabgaben", id: 9 },
  { label: "3456 Vorabausschüttung", id: 10 },
  { label: "4666 Zinsen und ähnliche Aufwendungen", id: 11 },
  { label: "5900 Steuerfreie Einfuhren", id: 12 },
  { label: "6789 Nicht abziehb. VoSt 7% (Materialaufwand)", id: 13 },
  { label: "7908 Nachlässe aus Einkauf RHB", id: 14 },
  { label: "8078 Erhaltene Skonti 16% Vorsteuer", id: 15 },
  { label: "6787 Versicherung für Gebäude", id: 16 },
];

export default function Account(props) {
  const { values, setValues, index } = props;

  // state to store user input of account they chose
  const [accountValue, setAccountValue] = useState("");

  // pushing chosen accountValue into overall values array when accountValues changes
  useEffect(() => {
    const vals = values.val;
    vals[index].account = accountValue;
    setValues({ val: vals });
  }, [accountValue]);

  return (
    <Autocomplete
      value={values.val[index].account}
      onChange={(event, newValue) => setAccountValue(newValue)}
      id="accounts-dropdown"
      options={datevAccounts}
      sx={{ width: 400 }}
      size="medium"
      renderInput={(params) => (
        <TextField {...params} label="Select Datev Account" />
      )}
    />
  );
}

Account.propTypes = {
  values: PropTypes.objectOf().isRequired,
  setValues: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};