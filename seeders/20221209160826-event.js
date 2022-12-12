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
          date: 'May 5th 2022',
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pick up basketball',
          description:
            'Join a friendly game of pick up basketball at Pomeroy Park this Sunday! Bring your sneaks and a water bottle!',
          date: 'July 7th 2022',
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jazz festival',
          description:
            'The best music festival in town! Come enjoy three days of smooth music at your favorite downtown spots!',
          date: 'June 3rd 2022',
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Five dollar burger night',
          description:
            'The famous five dollar burger night is back! Come to Nectar for the cheapiest and tastiest burger in town.',
          date: 'August 12th 2022',
          attending: ['BurlingtonAdventurer', 'MusicLover', 'VermontFoodie'],
          categoryId: 3,
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
