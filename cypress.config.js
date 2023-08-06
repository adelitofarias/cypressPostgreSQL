const { defineConfig } = require("cypress");
const { Client } = require("pg");
//import { Client } from 'pg';

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      
      // Just change this data based on what you need for your project.
      on("task", {
        async connectDBPostgreSQL(query){
          const client = new Client({
            user: "postgres",
            password: "123",
            host: "localhost",
            database: "teste",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
      
      return config;
    },

    specPattern:"cypress/e2e/features/**/*.feature"

  },
});
