export const taskBadgeColor = (status: string) => {
  switch (status) {
    case "Ongoing":
      return "yellow";
    case "Completed":
      return "green";
    default:
      return "gray";
  }
};

export const requestUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "low":
      return "#ED982A";
    case "medium":
      return "#195874";
    case "high":
      return "#B10239";
    default:
      return "gray";
  }
};
