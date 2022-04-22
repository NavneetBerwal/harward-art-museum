var url = 'https://api.harvardartmuseums.org/exhibition?apikey=a98c34f6-c8c7-49c9-b282-a5558439f6d4';
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((apidata) => {
        console.log(apidata);
      })
      .catch((err) => {
        console.log(err);
      });