/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // tutorialSidebar2: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  'Guide': {
    'Getting Started': [
      'getting-started/intro',
      'getting-started/roster-service',
      'getting-started/cognito-jwt',
    ],
  },

  'API References': {
    'Roster': [
      'roster-service/company', 
      'roster-service/department',
      'roster-service/employee',
      'roster-service/roster_employee',
      'roster-service/roster',
      'roster-service/work_location',
      'roster-service/work_statistic',
    ],
    'Analytics': [
      'analytics-service/employee', 
      'analytics-service/employee_vaccination'
    ],
  },

  'Deployment Guide': {
    'Amazon RDS': [
      'dev-ops/database', 
      'dev-ops/dms'
    ],
    'Amazon ECS': [
      'dev-ops/ecs'
    ],
  },

  'Design and Architecture': {
    'Cloud': [
      'architecture/cloud', 
    ],
  },
};
