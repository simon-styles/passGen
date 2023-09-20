import { DialogContentText, Typography } from "@mui/material";
import React from "react";

const EntropyDialogContent = () => {
  return (
    <DialogContentText>
      <Typography paragraph>
        Entropy, measured in 'bits', is a representation of the randomness or
        complexity of your password. The higher the entropy, the harder it is to
        guess your password through brute force.
      </Typography>
      <Typography paragraph>
        We calculate entropy based on the different types of characters used in
        your password, and its length. If your password includes lowercase
        letters, we add 26 to our calculation (for the 26 letters in the
        alphabet). We do the same if your password includes uppercase letters.
        If it includes numbers, we add 10 (for the digits 0-9). For
        non-alphanumeric characters (such as symbols or spaces), we add 31, as
        this is a typical number of these characters on a keyboard.
      </Typography>
      <Typography paragraph>
        Once we have this total, let's call it 'N', we raise it to the power of
        the length of your password ('L'). The result gives us the total number
        of possible password combinations.
      </Typography>
      <Typography paragraph>
        However, this number can be very large and difficult to comprehend, so
        we take the base-2 logarithm (log2) of it. This transforms the number
        into an 'entropy' value in 'bits', which is easier to understand and
        compare.
      </Typography>
      <Typography paragraph>
        The entropy value gives you a sense of the 'search space' a potential
        attacker has to go through. The larger the search space, the longer it
        would typically take to find the correct password through brute force,
        as we estimate on the right side of the screen. This estimate is
        presented in the most appropriate time unit (seconds, minutes, hours,
        days, years) based on its magnitude, to provide a more graspable sense
        of the time required for a potential brute force attack.
      </Typography>
    </DialogContentText>
  );
};

export default EntropyDialogContent;
