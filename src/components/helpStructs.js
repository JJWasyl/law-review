export const dialogueTree = {
    Step1: {
        YES: 'Step2',
        NO: 'Ending'
    },

    Step2: {
        YES: 'Step3',
        NO: 'Ending'
    },

    Step3: {
        YES: 'Step4',
        NONE: 'End',
    },
}

export default dialogueTree
