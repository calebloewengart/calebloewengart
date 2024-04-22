let text = `{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees":[
        {
            "firstname": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseeligible": true
        },
        {
            "firstname": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseeligible": true
        },
        {
            "firstname": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseeligible": false
        },
        {
            "firstname": "Anna",
            "department": "Tech",
            "designation":"Executive",
            "salary": 25600,
            "raiseeligible": false

        }
    ]
}`

const humanResources = JSON.parse(text);
console.log(humanResources);

async function populate(){
    populateEmployees(humanResources);
}

populate();

function populateEmployees(obj){
    const section = document.querySelector("div");
    const employees = obj.employees;

    for(const employee of employees){
        const article = document.createElement("article")
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myPara4 = document.createElement("p");
        
        myH2.textContent = employee.firstname;
        myPara1.textContent = `Department: ${employee.department}`;
        myPara2.textContent = `Designation: ${employee.designation}`;

        if(employee.raiseeligible === true){
            employee.salary *= 1.1;
            employee.raiseeligible = false;
        } 

        myPara3.textContent = `Salary $${employee.salary}`;
        myPara4.textContent = `Raise Eligible? ${employee.raiseeligible}`;

        article.appendChild(myH2);
        article.appendChild(myPara1);
        article.appendChild(myPara2);
        article.appendChild(myPara3);
        article.appendChild(myPara4);

        section.appendChild(article);
        console.log(section);
    }

}

