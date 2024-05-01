// Create your own resume data in JSON format 
// Resume data is created in JSON format and placed in https://github.com/PradeeshKumarR/day4-es5vses6-task/blob/main/Resume.json

// For the above JSON, iterate over all for loops (for, for in, for of, forEach)
const url = "https://raw.githubusercontent.com/PradeeshKumarR/day4-es5vses6-task/main/Resume.json";

//Fetch all the data from JSON file
const fetch_all = new XMLHttpRequest(); //fetch all is an Object of the class XMLHttpRequest

fetch_all.onreadystatechange = () => {
    // It is called when there is a change of request to the server
    if (fetch_all.readyState === XMLHttpRequest.DONE){
        // If there is a connection between the client and server and the connection exists or URL exists
        let data = JSON.parse(fetch_all.response);

        console.log("Fetching personal information using for in loop");
        for (let key in data){
            console.log(`${key} : ${data[key]}`);
        }

        console.log("Fetching educational details using for each");
        let education = data["education"];
        education.forEach(element => {
            console.log( 'Degree :', element.degree);
            console.log( 'Institute :', element.institution);
            console.log( 'Department :', element.department);
            console.log( 'Part Time/Full Time :', element.studytype);
            console.log( 'Batch Start year :', element.batchstartyear);
            console.log( 'Passout year :', element.batchendyear);
        });

        console.log("Fetching work details using for each");
        let work = data['work'];
        work.forEach(element => {
            console.log('Company Name :', element.company);
            console.log('Designation :', element.position);
            console.log('Joining Date :', element.startdate);
            console.log('End Date :', element.enddate);
            console.log('Job Summary :', element.summary);
        })

        console.log("Fetching skills using for loop");
        let skills = data['skills'];
        for (let i = 0; i < skills.length; i++){
            for (let key in skills[i]){
                console.log(`${key} : ${skills[i][key]}`);
            }
        }

        console.log("Fetching hobbies using for of loop");
        let hobbies = data['interests'];
        for (let key of hobbies){
            console.log(key);
        }
    }
}

fetch_all.open("GET", url);
fetch_all.setRequestHeader("Accept", "application/json");
fetch_all.send();