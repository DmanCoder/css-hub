const logger = (...msgs: [unknown]): void => {
  if (process.env.NODE_ENV === 'development') console.log(...msgs);
};

export default logger;
