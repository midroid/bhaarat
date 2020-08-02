const { LANGUAGES, RAJBHASHA } = require("./src/data/languages");
const PURPOSED_OFFICIAL_LANGUAGES = require("./src/data/purposedOfficialLanguages");
const RAJYA = require("./src/data/rajya")
const SANGH_RAJYA_CHHETRA = require("./src/data/sanghRajyaChhetra")

exports.getAllRajya = function() {
  return RAJYA;
}

exports.getAllSanghRajyaChhetra = function() {
  return SANGH_RAJYA_CHHETRA;
}

exports.getOfficialLanguages = function() {
  return LANGUAGES;
}

exports.getPurposedOfficialLanguages = function () {
  return PURPOSED_OFFICIAL_LANGUAGES;
}

exports.getRajbhasha = function () {
  return RAJBHASHA;
}
