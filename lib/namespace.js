import { Mongo } from 'meteor/mongo'

const TestingData = new Mongo.Collection('testing-data')

export { TestingData }