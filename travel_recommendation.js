fetch("./travel_recommendation_api.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Cannot load JSON data");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
