'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        event_name: 'AI Bootcamp',
        description: 'Intro to AI concepts',
        event_date_time: '2025-05-01 10:00:00',
        duration: 120,
        location: 'Online',
        thumbnail: 'thumbnail1.jpg',
        category_id: 1,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Cloud Fundamentals',
        description: 'Basics of AWS and Azure',
        event_date_time: '2025-05-05 14:00:00',
        duration: 90,
        location: 'Hybrid',
        thumbnail: 'thumbnail2.jpg',
        category_id: 2,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'DevOps for Beginners',
        description: 'CI/CD fundamentals',
        event_date_time: '2025-05-10 09:00:00',
        duration: 180,
        location: 'Online',
        thumbnail: 'devops.jpg',
        category_id: 1,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Advanced SQL',
        description: 'Deep dive into SQL performance tuning',
        event_date_time: '2025-05-12 13:00:00',
        duration: 150,
        location: 'New York',
        thumbnail: 'sql.jpg',
        category_id: 2,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Cloud Native Summit',
        description: 'All about Kubernetes and microservices',
        event_date_time: '2025-05-20 10:30:00',
        duration: 240,
        location: 'San Francisco',
        thumbnail: 'cloud_summit.jpg',
        category_id: 4,
        created_by: 2,
        updated_by: 2
      },
      {
        event_name: 'Intro to Cybersecurity',
        description: 'Basic practices for cyber hygiene',
        event_date_time: '2025-05-22 15:00:00',
        duration: 90,
        location: 'Online',
        thumbnail: 'cyber.jpg',
        category_id: 3,
        created_by: 2,
        updated_by: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {});
  }
};
