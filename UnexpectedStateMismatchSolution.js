```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to cancel any ongoing requests
      // This is crucial to prevent state updates after unmount
      // For example, you might cancel a timeout or a fetch request here
      console.log("Cleanup function called");
    };
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (data) {
    return (
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  } else {
    return <Text>Error loading data.</Text>;
  }
};

export default MyComponent;
```