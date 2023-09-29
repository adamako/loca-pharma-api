const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const apiURL = "https://maps.googleapis.com/maps/api";
const key = process.env.GOOGLE_MAPS_API_KEY;

app
  .get("/api/google-maps", async (req, res) => {
    try {
      let query;
      if (req.query.search) {
        query = encodeURI(req.query.search);
      } else {
        query = encodeURI("pharmacies in burkina faso");
      }

      let fetchUrl = `${apiURL}/place/textsearch/json?query=${query}&key=${key}`;

      if (req.query.pagetoken) {
        fetchUrl = `${apiURL}/place/textsearch/json?query=${query}&key=${key}&pagetoken=${req.query.pagetoken}`;
      }

      // Make a request to the Google Maps API
      const response = await fetch(fetchUrl);
      const data = await response.json();

      // Set CORS headers to allow requests from your client-side application
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
      );

      // Send the Google Maps API response to the client
      res.send(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        error: "An error occurred while fetching data from Google Maps API",
      });
    }
  })

  .get("/api/google-maps-details", async (req, res) => {
    try {
      // Make a request to the Google Maps API
      const response = await fetch(
        `${apiURL}/place/details/json?place_id=${req.query.place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      );

      const data = await response.json();

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
      );

      res.send(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        error: "An error occurred while fetching data from Google Maps API",
      });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
