/* eslint-disable no-undef */
import { config } from 'dotenv';

const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;
config({ path: envFile });

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN , ARCJET_ENV, ARCJET_KEY, QSTASH_URL, QSTASH_TOKEN, SERVER_URL } = process.env;
