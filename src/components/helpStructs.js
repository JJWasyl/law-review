export const dialogueTree = {
  Step1: {
    YES: "Step2",
    NO: "Ending"
  },

  Step2: {
    YES: "Step4",
    NO: "Ending"
  },
  Step3: {
    YES: "Step4",
    NONE: "End"
  },

  Step4: {
    YES: "Step5",
    NONE: "END"
  }
};

export default dialogueTree;
