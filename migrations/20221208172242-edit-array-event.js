'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('events', 'attending', {
      type: Sequelize.ARRAY(Sequelize.STRING)
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('events', 'attending', {
      type: Sequelize.STRING
    })
  }
}
