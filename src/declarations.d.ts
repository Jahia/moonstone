/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

// The bundler of the consumer replaces process.env.NODE_ENV; the library build keeps it
declare const process: { env: { NODE_ENV?: string } };
