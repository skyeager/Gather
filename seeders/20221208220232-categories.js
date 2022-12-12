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
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Music',
          description:
            'Learn about the best music venues in town! Find out where your favorite band is playing or learn about an open mic night! The world is your musical oyster.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Food',
          description:
            'Burlington loves food and you do too! Find out about the the hippest and tastiest cuisine around.',
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
