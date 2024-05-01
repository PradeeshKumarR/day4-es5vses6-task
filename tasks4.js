// Create your own resume data in JSON format 
// Resume data is created in JSON format and placed in https://github.com/PradeeshKumarR/day4-es5vses6-task/blob/main/Resume.json

// For the above JSON, iterate over all for loops (for, for in, for of, forEach)
const url = "https://raw.githubusercontent.com/PradeeshKumarR/day4-es5vses6-task/main/Resume.json";
//const url = "https://dummyjson.com/products/1";
//Fetch all the data from JSON file
const fetch_all = new XMLHttpRequest(); //fetch all is an Object of the class XMLHttpRequest

fetch_all.onreadystatechange = () => {
    // It is called when there is a change of request to the server
    if (fetch_all.readyState === XMLHttpRequest.DONE){
        // If there is a connection between the client and server and the connection exists or URL exists
        let data = JSON.parse(fetch_all.response);
        console.log(data);
        console.log("Personal Information")
        for (let key in data){
            console.log(`${key} : ${data[key]}`);
        }
        let profiles = data["profiles"];
        console.log(profiles);
    }
}

fetch_all.open("GET", url);
fetch_all.setRequestHeader("Accept", "application/json");
fetch_all.send();