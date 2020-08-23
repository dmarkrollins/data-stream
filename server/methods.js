import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { TestingData } from '../lib/namespace'

Meteor.methods({
    async generateData() {

        this.unblock()

        TestingData.remove({})

        dataactive = true

        for (let i = 0; i < 10000; i += 1) {
            if (!dataactive) {
                break;
            }
            TestingData.insert({
                randomOne: Random.id(),
                randomTwo: Random.id(),
                randomThree: Random.id(),
                createdAt: new Date()
            })
            await Meteor.sleep(50)
        }

    },

    stopGenerating() {
        console.log('stopping')
        dataactive = false
    }


})