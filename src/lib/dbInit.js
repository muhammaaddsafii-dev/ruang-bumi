import { initializeAuthTables } from './db';

/**
 * Function to initialize database when the application first runs
 * This function should be called when the application starts, e.g., in layout.tsx
 */
export async function initializeDatabase() {
  try {
    // Initialize authentication tables
    await initializeAuthTables();
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}