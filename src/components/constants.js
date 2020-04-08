export const compensationType = [
  {
    key: "salary",
    label: "Salary",
    tooltip: "Fixed compensation paid regularly for service.",
    value: false
  },
  {
    key: "cash",
    label: "Cash Payments",
    tooltip:
      "A wire transfer of immediately available funds to such account as the company may specify from time to time.",
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
    tooltip:
      "A bonus is a financial compensation that is above and beyond the normal payment (the initial salary paid to an employee) expectations of its recipient.",
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
    label:
      "Physical therapy, occupational therapy, and outpatient speech-language pathology services",
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
    tooltip:
      " Stock (also known as “share” or “equity”) is a type of security that signifies proportionate ownership in the issuing corporation. This entitles the stockholder to that proportion of the corporation's assets and earnings.",
    value: false
  },
  {
    key: "stockOptions",
    label: "Stock Options",
    tooltip:
      "A stock option gives an investor the right, but not the obligation, to buy or sell a stock at an agreed upon price and date.",
    value: false
  },
  {
    key: "LLC",
    label: "Membership interest in a limited liability corporation (“LLC”)",
    tooltip:
      "A person who holds a membership interest has a profit and voting interest in the LLC.",
    value: false
  },
  {
    key: "partnershipShares",
    label: "Partnership Shares",
    tooltip:
      "Shares which the trustees allocate to participants in respect of their contributions.",
    value: false
  },
  {
    key: "loans",
    label: "Loans",
    tooltip:
      "A loan is money, property, or other material goods given to another party in exchange for future repayment of the loan value or principal amount, along with interest or finance charges. ",
    value: false
  },
  {
    key: "bonds",
    label: "Bonds",
    tooltip:
      "A bond is a fixed income instrument that represents a loan made by an investor to a borrower (typically corporate or governmental).",
    value: false
  },
  {
    key: "other",
    label: "Other",
    value: false
  },
  {
    key: "idk",
    label: "I don't know",
    value: false
  }
];

export const insurance = [
  {
    key: "medicare",
    label: "Medicare",
    value: false
  },
  {
    key: "medicaid",
    label: "Medicaid",
    value: false
  },
  {
    key: "workersComp",
    label: "Workers Compensation",
    value: false
  },
  {
    key: "privateInsurance",
    label: "Private Insurance",
    value: false
  },
  {
    key: "idk",
    label: "I don't know",
    value: false
  }
];

export const emptyReferralAnswer = {
  insurance: insurance,
  entityName: null,
  healthService: healthServices,
  compensation: null,
  compensationType: compensationType,
  ownershipInterests: ownershipInterests,
  subsidiary: null,
  referralRole: null
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
      return "Q6";
    }
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
