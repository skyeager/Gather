'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Movement',
          description:
            'Here you will find all events that are movement based--from yoga to pick up rugby to dance classes, and more!',
          events: ['Yoga in the park', 'Pick up basketball'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
