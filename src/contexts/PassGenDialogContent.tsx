import { DialogContentText, Typography } from "@mui/material";
import React from "react";

const PassGenDialogContent = () => {
  return (
    <DialogContentText>
      <Typography paragraph>
        Welcome to 'PassGen'! Here's a tool that doesn't just create secure
        passwords, but it also educates you about the strength of those
        passwords in the face of potential attacks.
      </Typography>
      <Typography paragraph>
        You can generate robust passwords using PassGen, and it tells you how
        long it might take for a sophisticated computer system to crack them.
        This system, for the sake of illustration, can make an astonishing 1
        quadrillion guesses every second!
      </Typography>
      <Typography paragraph>
        What makes PassGen unique is its ability to check the strength of your
        existing passwords without requiring you to share them. You just input
        the length of your password and the types of characters you've used
        (lowercase, uppercase, numbers, or symbols). Since PassGen is a
        browser-based tool, there's no data being sent or stored anywhere – your
        information always remains confidential and secure in your own browser.
      </Typography>
      <Typography paragraph>
        Our application also educates you about 'password entropy', which is a
        measure of password complexity. The higher the entropy, the harder your
        password is to crack. When we calculate the time it would take to brute
        force your password, we give you a real sense of your password's
        strength.
      </Typography>
      <Typography paragraph>
        Remember, PassGen is entirely free to use. Our goal is to make strong
        cybersecurity accessible to everyone. Enjoy using PassGen - we hope it
        answers all your security queries. It's like the '42' of password
        generators, a seemingly simple answer to complex online security
        questions!
      </Typography>
    </DialogContentText>
  );
};

export default PassGenDialogContent;
