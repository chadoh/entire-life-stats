export default str => {
  const [year, month, day] = str.split("T")[0]
    .split("-").slice(0, 3).map(Number);

  return new Date(year, month - 1, day);
};

