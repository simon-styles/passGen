export function computeBruteForceTime(entropy: number): {
  time: number;
  unit: string;
} {
  const ATTEMPTS_PER_SECOND = 100 * 1e6 * 10 * 1e6;
  const SECONDS_IN_YEAR = 60 * 60 * 24 * 365.25;

  const number_of_attempts = Math.pow(2, entropy);
  let time = number_of_attempts / ATTEMPTS_PER_SECOND / SECONDS_IN_YEAR;

  const conversions = [
    { unit: "years", factor: 1 },
    { unit: "days", factor: 365.25 },
    { unit: "hours", factor: 24 },
    { unit: "minutes", factor: 60 },
    { unit: "seconds", factor: 60 },
    { unit: "milliseconds", factor: 1000 },
    { unit: "microseconds", factor: 1000 },
    { unit: "nanoseconds", factor: 1000 },
  ];

  let unit = "";

  for (let conversion of conversions) {
    if (time >= 1.0) {
      unit = ` ${conversion.unit}`;
      break;
    }
    time *= conversion.factor;
  }

  if (!unit) {
    unit = " nanoseconds";
  }

  return { time: parseFloat(time.toFixed(2)), unit };
}
