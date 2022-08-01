const randomNumberGenerator = ({ max }: { max: number }): number => {
  const randomNumber: number = Math.floor(Math.random() * (max - 1));
  return randomNumber;
};

export default randomNumberGenerator;
