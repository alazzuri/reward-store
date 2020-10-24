export const getRemainingPoints: (
  requiredPoints: number,
  availablePoints: number
) => boolean | number = (requiredPoints, availablePoints = 0) => {
  if (!availablePoints || requiredPoints < availablePoints) return false;

  return (requiredPoints - availablePoints) * -1;
};
