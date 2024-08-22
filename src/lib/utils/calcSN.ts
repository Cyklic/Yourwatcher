export const serialNumber = (pageNumber: number, index: number) => {
  const itemsPerPage = 10;

  const serialNumber = (pageNumber - 1) * itemsPerPage + index + 1;

  return serialNumber;
};
