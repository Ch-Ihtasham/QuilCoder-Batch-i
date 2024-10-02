const fetchSoilMoistureData = async () => {
    const url = 'https://appeears.earthdatacloud.nasa.gov/api/data'; // Endpoint for data retrieval
    
    const body = {
      dataset: 'SMAP', // Example dataset for soil moisture
      spatial_extent: {
        type: 'Point',
        coordinates: [-120.0, 35.0]  // Longitude, Latitude for the specific land area
      },
      temporal_extent: ['2023-01-01', '2023-12-31'], // Example time range
    };
    
    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST method for retrieving data
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authentication tokens here
        },
        body: JSON.stringify(body)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Soil Moisture Data:', data);
      } else {
        console.error('Failed to fetch data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchSoilMoistureData();
  