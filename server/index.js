import app from '../api/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

// Serve static frontend build files when running standalone
app.use(express.static(distPath));

// Fallback all non-API routes to index.html (SPA routing)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Diffraction Spectrometer backend server running on http://localhost:${PORT}`);
});
