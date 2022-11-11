export const getInitials = (name: string) => {
  return name.split(" ")[0][0] + name.split(" ")[name.split(" ").length - 1][0];
};

export const formatName = (name: string) => {
  return name.split(" ")[0] + " " + name.split(" ")[name.split(" ").length - 1];
};
