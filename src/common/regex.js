const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password:
    /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).*$/,
  letters: /^[a-zA-Z]+( [a-zA-Z]+)*$/,
  // eslint-disable-next-line no-useless-escape
  idNumber: /^\d{10}$/,
  numberMaxLength10: /^\d{1,10}$/
};

export default regex;
