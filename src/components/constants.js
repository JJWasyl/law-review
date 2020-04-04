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
  healthService: null,
  compensation: null,
  compensationType: "",
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
