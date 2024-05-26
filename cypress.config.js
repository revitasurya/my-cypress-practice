const { defineConfig } = require("cypress");

//mysql connection
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = defineConfig({
  projectId: "igcg6z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', 
      { queryDb: query => { return queryTestDb(query, config) }, 
    });
    },
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportWidth: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    runMode: 2,
  },
  "env": {
    "db": {
      "host": "localhost",
      "port":"8889",
      "user": "root",
      "password": "root",
      "database": "cypress_practice"
    }
  },
});
