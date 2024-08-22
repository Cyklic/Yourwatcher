export const mapProgressMsg = (stage: number) => {
  const stageMap = {
    0: "Request created",
    1: "Request posted",
    2: "Request approved",
    3: "Assigned to a department",
    4: "Assigned to a researcher",
    8: "Report uploaded",
    9: "Report approved",
    10: "Final approval",
  };

  const msg = stageMap[stage as keyof typeof stageMap];
  return msg ?? "";
};
