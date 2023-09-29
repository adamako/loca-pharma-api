# Google Maps API Service

This is a simple Node.js service that provides access to the Google Maps API for retrieving information about places. It includes two endpoints:

1. `/api/google-maps`: This endpoint allows you to search for places using the Google Maps API. You can specify a search query as a query parameter, and the service will return a list of places matching the query. If no query is provided, it defaults to searching for "pharmacies in Burkina Faso." This endpoint also supports pagination using a `pagetoken` query parameter.

2. `/api/google-maps-details`: This endpoint allows you to retrieve details about a specific place using its `place_id`. You can provide the `place_id` as a query parameter, and the service will return detailed information about that place.

## Setup

Before you can use this service, you need to set up your environment:

1. Create a `.env` file in the root directory of the project and add your Google Maps API key as follows:
   ```dotenv 
      GOOGLE_MAPS_API_KEY=<your-api-key>
   ```
2. Install the dependencies by running `npm install`.
3. Start the service by running `node server.js`.


The service will run on the default port 3000 or the port specified in the `PORT` environment variable.

## Usage

### Search for Places

To search for places, make a GET request to the `/api/google-maps` endpoint with a `search` query parameter. For example:
```bash
curl http://localhost:3000/api/google-maps?search="pharmacies in Burkina Faso"
```


This will return a list of places matching the search query.

#### Pagination

If there are more results available, you can retrieve the next page of results by providing the `pagetoken` query parameter in the response. For example:

```bash
curl http://localhost:3000/api/google-maps?pagetoken=<your-page-token>
```

This will return detailed information about the specified place.

## CORS Support

The service includes CORS (Cross-Origin Resource Sharing) headers that allow requests from any origin. This means you can use it in client-side applications without encountering CORS issues.

## Error Handling

If there are any errors while fetching data from the Google Maps API, the service will respond with a 500 Internal Server Error and provide an error message in the JSON response.

## Dependencies

This service uses the following Node.js packages:

- `express`: A web application framework for Node.js.
- `axios`: A promise-based HTTP client for making requests to the Google Maps API.
- `dotenv`: A package for loading environment variables from a `.env` file.

## Disclaimer

This service is for demonstration purposes and may be subject to usage limits and terms of service imposed by the Google Maps API. Make sure to review and comply with Google's terms and conditions when using this service in a production environment.

Feel free to customize and extend this service to suit your specific requirements. Happy mapping!
