// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   projectId: 'robqrq',
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = {
  component: {
    testFiles: "**/*.cy.js", // Ensure the path to your test files is correct
    supportFile: "src/support/component.js", // Optional: configure your support file if necessary
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
