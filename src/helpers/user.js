export const randomNames = () => {
  const names = ["edgar", "martin", "abgar", "vazgen"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;
};

export const randomDescription = () => {
  const surnames = ["Kofe arnel", "Gnal xanut", "Code grel"];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return randomSurname;
};

export const randomStatus = () => {
  return Math.random() > 0.5 ? true : false;
};
