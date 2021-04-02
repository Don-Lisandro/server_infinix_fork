'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      registrationNumber: {
        type: Sequelize.STRING,
      },

      surname: {
        type: Sequelize.STRING,
      },

      name: {
        type: Sequelize.STRING,
      },

      profession: {
        type: Sequelize.INTEGER,
      },

      password: {
        type: Sequelize.STRING,
        unique: 'compositeIndex',
      },

      email: {
        type: Sequelize.STRING,
        unique: 'compositeIndex',
      },

      telephone: {
        type: Sequelize.STRING,
      },

      authorizationAccess: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },

      dateLastSeen: {
        type: Sequelize.DATE,
      },

      site: {
        type: Sequelize.INTEGER,
      },

      language: {
        type: Sequelize.INTEGER,
      },

      archived: {
        type: Sequelize.BOOLEAN,
      },

      archivedDate: {
        type: Sequelize.DATE,
      },
      flagChangePassword: {
        type: Sequelize.BOOLEAN,
      },
      flagDurablePassword: {
        type: Sequelize.BOOLEAN,
      },
      civility: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      profile: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
