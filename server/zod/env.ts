import { z } from 'zod'

export const appEnvVariablesSchema = z.object({
    TELEGRAM_BOT_TOKEN: z.string(),
    TELEGRAM_CHAT_ID: z.string(),
    SUPABASE_SERVICE_KEY: z.string(),
    SUPABASE_URL: z.string(),
    SUPABASE_ANON_KEY: z.string(),
    SUPABASE_JWT_SECRET: z.string(),
})

export type AppEnvVariables = z.infer<typeof appEnvVariablesSchema>;
