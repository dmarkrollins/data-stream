import SimpleSchema from 'simpl-schema'
import { TestingData } from './namespace'

const TestDataSchema = new SimpleSchema({

    _id: {
        type: String,
        label: "Competitor ID",
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        max: 20
    },
    randomOne: {
        type: String
    },
    randomTwo: {
        type: String
    },
    randomThree: {
        type: String
    },
    createdAt: {
        type: Date
    }

})

TestingData.attachSchema(TestDataSchema);

export { TestDataSchema }

