'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'events',
      [
        {
          name: 'Yoga in the park',
          description:
            'Free yoga in the park this weekend! Enjoy a gentle yoga class on the waterfront.',
          date: '052022',
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pick up basketball',
          description:
            'Join a friendly game of pick up basketball at Pomeroy Park this Sunday! Bring your sneaks and a water bottle!',
          date: 07072022,
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jazz festival',
          description:
            'The best music festival in town! Come enjoy three days of smooth music at your favorite downtown spots!',
          date: 06032022,
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Five dollar burger night',
          description:
            'The famous five dollar burger night is back! Come to Nectar for the cheapiest and tastiest burger in town.',
          date: 08122022,
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {})
  }
}
