import { Meteor } from 'meteor/meteor'
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating';
import { TestingData } from '../lib/namespace'
import moment from 'moment'

import './main.html';
import { TestDataSchema } from '../lib/testingDataSchema';

Template.hello.onCreated(function helloOnCreated() {

    this.allDone = new ReactiveVar(true)

    this.autorun(() => {
        Meteor.subscribe('dataList')
    })

})

Template.hello.helpers({
    data() {
        return TestingData.find()
    },
    createdDate() {
        return moment(this.createdAt).format('YYYY-MM-DD hh:mm:ss:SSS')
    },
    startDisabled() {
        return Template.instance().allDone.get() === true ? '' : 'disabled'
    },
    stopDisabled() {
        return Template.instance().allDone.get() === false ? '' : 'disabled'
    }
});

Template.hello.events({
    'click button.start'(event, instance) {

        instance.allDone.set(false)

        Meteor.call('generateData', (err) => {
            instance.allDone.set(true)
            if (err) {
                alert(err)
            }
        })
    },

    'click button.stop'(event, instance) {

        Meteor.call('stopGenerating', (err) => {
            if (err) {
                return alert(err)
            }
        })
    }
});
