const submitData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringif({
        dogName: "Byron",
        dogBreed: "Poodle",

    })
};

fetch("http://localhost:3000/dogs", submitData);