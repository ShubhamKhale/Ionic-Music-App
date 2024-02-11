const express = require("express");
const admin = require("firebase-admin"); // Optional: For Firebase
const functions = require("firebase-functions"); // Optional: For Firebase Functions

// App setup
const app = express();
const PORT = process.env.PORT || 3000;

// Firebase initialization (optional, modify if using)
if (process.env.FIREBASE_PROJECT_ID) {
  const serviceAccount = require("./path/to/your/service-account-key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Middleware (optional)
// Example authentication middleware:
// app.use('/api/*', require('./middlewares/auth'));

// API routes
// Example basic route:
app.get("/", (req, res) => {
  res.json({ message: "Hello from your backend server!" });
});

// Example route using Spotify service (modify as needed):

app.get("/api/spotify/search", async (req, res) => {
  const { query } = req.query;
  try {
    const results = await spotifyService.searchTracks(query);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error searching Spotify");
  }
});

// ... Add other API routes as needed ...

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  // Log the error
  console.error(err.stack);
  // Send a generic error response to the client
  res.status(500).send("Internal server error");
});

// Start the server (modify if using Firebase Functions)
if (!functions.config().firebase) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} else {
  // Export for Firebase Functions deployment (optional)
  exports.app = functions.https.onRequest(app);
}