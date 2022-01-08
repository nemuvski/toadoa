# ToaDoa

🚧 now under construction

## 👜 Preparation

### Create dotenv file

```bash
cp .env.example .env.development

# Fill in your supabase project configuration
vi .env.development
```

### Initialize DB on Supabase

The following commands will help you set up the database.

```bash
yarn sequelize-cli db:migrate
```

See files under `sequelize/migrations` directory for details.


## 💡 Tips

### Database migrations with Sequelize

This project uses Sequelize to migrate or manage the database (Postgres).

```bash
# Case: Set NODE_ENV variable
## Loading .env.development file
NODE_ENV=development yarn sequelize-cli {some-command}
## Loading .env.production file
NODE_ENV=production yarn sequelize-cli {some-command}

# Case: Not set NODE_ENV variable
## Loading .env.development file (default: development)
yarn sequelize-cli {some-command}
```
