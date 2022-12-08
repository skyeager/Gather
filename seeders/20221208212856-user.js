'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'BurlingtonAdventurer',
          email: 'Adventure20@email.com',
          passwordDigest: '1234',
          goingTo: ['Yoga in the park', 'Pick up basketball'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'MusicLover',
          email: 'VermontMusic@email.com',
          passwordDigest: '1234',
          goingTo: ['Jazz Festival', 'Pick up basketball'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'VermontFoodie',
          email: 'BurgerFiend@email.com',
          passwordDigest: '1234',
          goingTo: ['Jazz Festival', 'Five dollar burger night'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
