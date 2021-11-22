# ToaDoa

🚧 now under construction

## Preparation

```bash
cp .env.example .env.development

# Fill in your supabase project configuration
vi .env.development
```

## Database

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
