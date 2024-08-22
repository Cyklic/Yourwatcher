const getInitials = (firstName?: string, lastName?: string): string =>
  firstName && lastName
    ? firstName[0] + lastName[0]
    : firstName || lastName || "";

export default getInitials;
