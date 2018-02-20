
'use strict';

///////////////////////////////////////////////////////////////////////
///////////////////      partner test db          ////////////////////
//////////////////////////////////////////////////////////////////////

const uuidv1 = require('uuid/v1');
let dt1 = new Date('3/1/2018')
let dt2 = new Date('3/2/2018')
let dt3 = new Date('3/3/2018')
let dt4 = new Date('3/4/2018')
const objStore =  [
  {
  itemId: "1",
  description: "create a reactjs login widget",
  price: 75.00,
  currency: "USD",
  stage: "active",
  dueDate: dt1 },
  {
  itemId: "2",
  description: "create an agent to authenticate",
  price: 225.00,
  currency: "USD",
  stage: "active",
  dueDate: dt2 },
  {
  itemId: "3",
  description: "create an agent skill to capture credit card data",
  price: 175.00,
  currency: "USD",
  stage: "active",
  blockchain: {
    id: "12345"
  },
  dueDate: dt3 },
  {
  itemId: "4",
  description: "build and test an agent skill to post images to cloudinary",
  price: 45.00,
  currency: "USD",
  stage: "active",
  dueDate: dt4 },
  {
  itemId: "5",
  description: "create an agent to set up a shared video link",
  price: 338.00,
  currency: "USD",
  stage: "closed",
  dueDate: dt2 },
  {
  itemId: "6",
  description: "create an agent skill to return weather report based on location parameter",
  price: 206.00,
  currency: "USD",
  stage: "open",
  dueDate: dt2 },
]

module.exports = objStore;
