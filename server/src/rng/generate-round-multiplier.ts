export const generateRoundMultiplier = (): { roundMultiplier: number } => {
  const roundMultiplier = Number(randomIntFromInterval(0.5, 1.5));

  return {
    roundMultiplier,
  };
};

const randomIntFromInterval = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};
