'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'user_events',
      [
        {
          name: '',
          userId: 1,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '',
          userId: 2,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '',
          userId: 3,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_events', null, {})
  }
}
