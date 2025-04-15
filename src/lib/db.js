// src/lib/db.js
import { Pool } from 'pg';

// Create a new pool instance using environment variables
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
});

// Export the query method for use in other files
export async function query(text, params) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Helper function to end the pool when the app shuts down
export function closePool() {
  return pool.end();
}

// Function to initialize authentication tables
export async function initializeAuthTables() {
  try {
    // Check if the users table exists
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `;
    
    const tableExists = await query(checkTableQuery);
    
    // If table doesn't exist, create it
    if (!tableExists.rows[0].exists) {
      const createTableQuery = `
        CREATE TABLE users (
          id UUID PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          role VARCHAR(50) DEFAULT 'admin',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      await query(createTableQuery);
      console.log('Users table successfully created');
    } else {
      console.log('Users table already exists');
    }
  } catch (error) {
    console.error('Error initializing auth tables:', error);
    throw error;
  }
}