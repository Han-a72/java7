function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Fetched data:", randomNumber);
        resolve(randomNumber);
      }, 2000);  
    });
  }
  function processData(data) {
    return new Promise(resolve => {
      console.log("Processing data:", data);
      setTimeout(() => {
        const processedData = data * 2;
        resolve(processedData);
      }, 1000);  
    });
  }
  fetchData()
  .then(data => {
    return processData(data); 
  })
  .then(processedData => {
    console.log("Processed data:", processedData);  
    console.log("Tasks complete!");  
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
      