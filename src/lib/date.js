// const { pause } = require("browser-sync");
module.exports = {
  age(timestamp) {
    const today = new Date(); // cbj de data
    const birthDate = new Date(timestamp);
    // 2019 - 2002 = 17
    let age = today.getFullYear() - birthDate.getFullYear(); // o ano todo
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month == 0 && today.getDate() <= birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  },
  date(timestamp) {
    const date = new Date(timestamp);
    // yyyy
    const year = date.getUTCFullYear();
    // mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    // dd
    const day = `0${date.getUTCDate()}`.slice(-2);
    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    };
  },
};

//// logic date
// 2019 - 2002 = 17
// meses
// 11 - 12 = -1
// 11 - 11 = 0
// 11 - 10 = 1
// dias
// 01 - 12 = -11
// 13 - 12 = 1
