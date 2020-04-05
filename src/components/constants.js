export const compensation = [
  {
    key: "cash",
    label: "Salary or other cash payments",
    value: false
  },
  {
    key: "goods",
    label: "Free or discounted goods, equipment or services",
    value: false
  },
  {
    key: "rent",
    label: "Free or discounted rent",
    value: false
  },
  {
    key: "loanForgiveness",
    label: "Forgiveness of amounts owed",
    value: false
  },
  {
    key: "tickets",
    label: "Trips or tickets",
    value: false
  },
  {
    key: "bonuses",
    label: "Bonuses",
    value: false
  },
  {
    key: "charity",
    label: "Charitable donations",
    value: false
  },
  {
    key: "other",
    label: "Other net economic benefit",
    value: false
  }
];

export const healthServices = [
  {
    key: "clinic",
    label: "Clinical Laboratory Services",
    value: false
  },
  {
    key: "physicalTherapy",
    label: "Physical Therapy Services",
    value: false
  },
  {
    key: "radiology",
    label: "Radiology and Imaging Services",
    value: false
  },
  {
    key: "radiation",
    label: "Radiation Therapy Services and Supplies",
    value: false
  },
  {
    key: "equipment",
    label: "Durable medical equipment and supplies",
    value: false
  },
  {
    key: "nutrients",
    label: "Parenteral and enteral nutrients, equipment and supplies",
    value: false
  },
  {
    key: "prosthetics",
    label: "Prosthetics, orthotics, and prosthetic devices and supplies",
    value: false
  },
  {
    key: "homeHealth",
    label: "Home health services",
    value: false
  },
  {
    key: "outpatientDrugs",
    label: "Outpatient prescription drugs",
    value: false
  },
  {
    key: "hospitalServices",
    label: "Inpatient and outpatient hospital services",
    value: false
  },
  {
    key: "other",
    label: "Other",
    value: false,
    text: ""
  }
];
export const ownershipInterests = [
  {
    key: "stock",
    label: "Stock",
    value: false
  },
  {
    key: "stockOptions",
    label: "Stock Options",
    value: false
  },
  {
    key: "LLC",
    label: "Membership interest in a limited liability corporation (“LLC”)",
    value: false
  },
  {
    key: "partnershipShares",
    label: "Partnership Shares",
    value: false
  },
  {
    key: "loans",
    label: "Loans",
    value: false
  },
  {
    key: "bonds",
    label: "Bonds",
    value: false
  },
  {
    key: "other",
    label: "Other",
    value: false
  }
];

export const emptyReferralAnswer = {
  medicareU: null,
  medicareE: null,
  entityName: null,
  healthService: healthServices,
  compensation: null,
  compensationType: compensation,
  ownershipInterests: ownershipInterests
};

export const emptySteps = {
  Start: {
    questionType: "Start",
    get nextStep() {
      return "Q1";
    }
  },
  Q1: {
    questionType: "InputForm",
    answer: {
      name: null,
      last_name: null,
      specialization: null,
      location: null
    },
    get nextStep() {
      return "Q4";
    }
  },
  Q4: {
    questionText: "Do you own your own practice?",
    questionType: "YesNoMaybe",
    answer: {
      Yes: null,
      No: null,
      Maybe: null
    },
    get nextStep() {
      return this.answer.Yes | this.answer.Maybe ? "Q5" : "Q6";
    },
    tooltip: null
  },
  Q5: {
    questionText: "Are you the sole owner of the practice?",
    questionType: "YesNoMaybe",
    answer: {
      Yes: null,
      No: null,
      Maybe: null
    },
    get nextStep() {
      return "Q6";
    },
    tooltip: null
  },
  Q6: {
    questionText:
      "Are you referring patients to another entity that provides health care services?",
    questionType: "YesNoMaybe",
    answer: {
      Yes: null,
      No: null,
      Maybe: null
    },
    get nextStep() {
      return this.answer.Yes | this.answer.Maybe ? "Q7" : "End";
    },
    tooltip:
      "An entity includes individual healthcare providers or healthcare organizations."
  },
  Q7: {
    questionType: "Referral",
    questionText: "To which entities are you making the referral?",
    tooltip:
      'Please add a referral for each separate entity who you make referrals to by clicking the "Add Another Referral" button below. When you are finished, please click "Done"',
    answer: [emptyReferralAnswer],
    get nextStep() {
      return "End";
    }
  },
  End: {
    questionType: "End"
  },
  Help: {
    questionType: "Help"
  }
};
