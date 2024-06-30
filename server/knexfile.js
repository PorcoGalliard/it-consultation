module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "binargold",
      database: "onic-consultation",
    },
    migrations: {
      directory: "./repository/migrations",
    },
    seeds: {
      directory: "./repository/seeds",
    },
  },
};
