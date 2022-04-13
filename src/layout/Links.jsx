import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Select onChange={handleChange}>
        <MenuItem value={10}>Profile</MenuItem>
        <MenuItem value={10}>Application Reviews</MenuItem>
        <MenuItem value={21}>Privacy Reviews</MenuItem>
        <MenuItem value={22}>Security Reviews</MenuItem>
        <MenuItem value={22}>Software Risks</MenuItem>
        <MenuItem value={22}>SignOut</MenuItem>
      </Select>
    </div>
  );
}
