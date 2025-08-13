export const config = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-strong-secret-key',
  },
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    dbName: process.env.MONGODB_NAME || 'auth-service',
  }
};