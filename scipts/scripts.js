const courseList = [
    {
        "code": "ACIT 1630",
        "name": "Database Systems",
    },
    {
        "code": "ACIT 1515",
        "name": "Scripting for IT"
    },
    {
        "code": "MATH 1310",
        "name": "Technical Math for IT"
    }
];

function askUser() {
    // prompting the user for data
    const userCode = prompt("Enter code");

    // to handle for loop
    let i;

    // validating user response
    const regex=/^[0-9]+$/;
    if(userCode.match(regex) && userCode.length == 4) {
        for(i = 0; i < courseList.length; i++) {
            if(courseList[i].code.includes(userCode)) {
                console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
            }
        }

        // if no course exists
        if(i == courseList.length) {
            courseList.push({
                code: userCode,
                name: null
            })
            console.log("New course successfully added");
        }
    } else {
        askUser();
    }
}

// function call
askUser();