module.exports = {
  type: 'postgres',
  port: 5432,
  url: process.env.DATABASE_URL,
  migrations: ['./src/settings/migrations/*.ts'],
  entities: ['./src/**/*.entities.ts'],
  cli: {
    migrationsDir: './src/settings/migrations',
  },
};
