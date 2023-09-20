import { DialogContentText, Typography } from "@mui/material";
import React from "react";

const BruteForceTimeDialogContent = () => {
  return (
    <DialogContentText>
      <Typography paragraph>
        A 'botnet' is a network of internet-connected devices, unknowingly
        infected with malware, used by cybercriminals to launch 'brute force
        attacks'. These attacks attempt every possible password combination
        until they find the right one. Our calculation estimates how long a
        botnet would need to crack your password through brute force, giving an
        indication of your password's strength. The longer the time, the
        stronger your password is against these common cyberattacks.
      </Typography>
      <Typography paragraph>
        In this app, we assume a powerful botnet made up of 10 million infected
        devices, or 'zombies'. With modern hardware, each 'zombie' can make 100
        million password attempts per second. We calculate the total attempts
        per second by multiplying the number of 'zombies' by the attempts each
        can make.
      </Typography>
      <Typography paragraph>
        So, the combined power of the entire botnet would allow 100 million
        attempts (from each 'zombie') times 10 million 'zombies'. This equals
        1,000,000,000,000,000, or 1 quadrillion attempts per second.
      </Typography>
      <Typography paragraph>
        Having calculated the entropy value, which represents the search space
        or the total number of possible password combinations (each combination
        is a unique 'attempt'), we can then determine the number of attempts a
        botnet would need to make to guess your password. This is done by
        raising 2 to the power of the entropy, as entropy is a logarithmic
        measure.
      </Typography>
      <Typography paragraph>
        Recall that our botnet can make 1 quadrillion attempts per second. With
        this, we can estimate the total time it would take for a botnet to try
        all possible password combinations by dividing the total number of
        attempts by the botnet's attempts per second.
      </Typography>
      <Typography paragraph>
        Initially, the time calculated is in seconds, which can be hard to
        conceptualize. To make it more understandable, we convert this duration
        into various units - it could be years, days, hours, minutes, seconds,
        or even smaller measures like milliseconds, microseconds, and
        nanoseconds. The unit of time is dependent on the magnitude of the
        calculated time.
      </Typography>
      <Typography paragraph>
        This time estimate, regardless of its unit, signifies how long an
        advanced botnet would need to brute force crack your password. It serves
        as a stark reminder of the importance of a complex, high-entropy
        password in safeguarding against such sophisticated cybersecurity
        threats.
      </Typography>
    </DialogContentText>
  );
};

export default BruteForceTimeDialogContent;
