import { Meteor } from 'meteor/meteor'
import { TestingData } from '../lib/namespace'

TestingData._ensureIndex({ createdAt: -1 })

Meteor.publish('dataList', function (tid, searchCriteria) {

    return TestingData.find({}, { limit: 10, sort: { createdAt: -1 } })

})

