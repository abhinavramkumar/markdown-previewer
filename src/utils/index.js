import { RegRules } from "../rules";

// * Updated to use dictionary based rules
const generateMarkdown = str => {
  const keys = Object.keys(RegRules);
  let keyRegEx;

  keys.forEach(key => {
    keyRegEx = new RegExp("^" + key, "gmi");

    if (keyRegEx.test(str)) {
      console.log("matched", key);
      RegRules[key].forEach(rule => {
        str = str.replace(rule.reg, rule.out);
      });
    }
  });

  return str;
};

export { generateMarkdown };
