const api = (() => {
    const baseUrl = 'http://localhost:3000';
  
    const fetchObstacles = (levelId, spriteName) => {
      const url = `${baseUrl}/obstacles/${levelId}?spriteName=${spriteName}`;
      return fetch(url)
      .then((result) => result.json())
      .catch(error => {console.error(error)});

    };
  
    return { fetchObstacles };
  })();
