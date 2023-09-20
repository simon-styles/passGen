import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Data = {
  password: string;
  entropy: number;
  bruteForceTime: {
    time: number;
    unit: string;
  };
};

type Props = {
  data: Data | null;
};

const DisplayPassword: React.FC<Props> = ({ data }) => {
  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?.password || "");
    } catch (err) {
      console.error("Failed to copy password: ", err);
    }
  };

  return (
    <>
      <TextField
        label={"Password"}
        variant={"outlined"}
        value={data?.password || ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              <IconButton edge={"end"} onClick={handleClickCopy}>
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default DisplayPassword;
