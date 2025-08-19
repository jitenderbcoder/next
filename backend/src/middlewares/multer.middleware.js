import multer from "multer";

// Set up in-memory storage
const storage = multer.memoryStorage();

// Configure the Multer upload
export const upload = multer({
  storage, // Use the in-memory storage
  limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 50 MB
});