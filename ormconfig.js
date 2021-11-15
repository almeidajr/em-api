const entryFolder = process.env.NODE_ENV === 'production' ? './dist' : './src';

module.exports = {
  type: 'postgres',
  port: 5432,
  url: process.env.DATABASE_URL,
  migrations: [entryFolder + '/settings/migrations/*.ts'],
  entities: [entryFolder + '/**/*.entities.ts'],
  cli: {
    migrationsDir: entryFolder + '/settings/migrations',
  },
};
