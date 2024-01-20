const dotenv = require("dotenv");
dotenv.config();

const development = {
  use_env_variable: "DATABASE_URL",
  dialect: "postgres",
  // ssl: true,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
};

const test = {
  username: "root",
  password: null,
  database: "rb_tech",
  host: "127.0.0.1",
  dialect: "postgres",
  operatorsAliases: false,
};

const staging = {
  use_env_variable: "DATABASE_URL",
  dialect: "postgres",
  ssl: true,
  pool: {
    max_comment: "This could be all the way up to 120",
    max: 80,
    min: 0,
    idle: 5000,
    acquire: 50000,
    handleDisconnects: true,
  },
};

const production = {
  use_env_variable: "DATABASE_URL",
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max_comment: "This could be all the way up to 120",
    max: 80,
    min: 0,
    idle: 5000,
    acquire: 50000,
    handleDisconnects: true,
  },
};

module.exports = { development, test, staging, production };
