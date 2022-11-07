const Employee = require("./employe");

class Engineer extends Employee {
  constructor(name, id, email, partnerGithub) {
    super(name, id, email);

    this.partnerGithub = partnerGithub;
  }
  // returning github from input
  getGithub() {
    return this.partnerGithub;
  }

  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;