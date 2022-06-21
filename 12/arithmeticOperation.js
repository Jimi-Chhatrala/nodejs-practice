const add = (a, b) => {
  return "Result is : " + (a + b);
};

const sub = (a, b) => {
  return "Result is : " + (a - b);
};

const multi = (a, b) => {
  return "Result is : " + a * b;
};

const name = "Name is Jimi";

// module.exports.name = name;
// module.exports.add = add;
// module.exports.sub = sub;
module.exports = {
  name,
  add,
  sub,
  multi,
};
