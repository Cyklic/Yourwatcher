export const mapStageToIndex = (stage: number) => {
  const stageMap = {
    2: 0,
    3: 1,
    4: 2,
    8: 3,
    9: 4,
    10: 5,
  };

  return stageMap[stage as keyof typeof stageMap] !== undefined
    ? stageMap[stage as keyof typeof stageMap]
    : -1;
};
