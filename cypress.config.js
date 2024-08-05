const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    github_loginUrl: 'https://github.com/login',
    github_userName: 'XXXX',
    github_userPassword: 'XXXX',
  },

  githubBaseUrl: 'https://github.com',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
