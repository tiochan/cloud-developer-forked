export const config = {
  "dev": {
    "username": "udagramsebas",
    "password": "udagramsebas",
    "database": "udagramsebas",
    // "host": "192.168.1.141",
    "host": "database-1.c0d8uixfjude.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-sgomez-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
