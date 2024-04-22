//Problem 1 + 2 + 3

let text = `{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees":[
        {
            "firstname": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseeligible": true,
            "wfh": true
        },
        {
            "firstname": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseeligible": true,
            "wfh": false
        },
        {
            "firstname": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseeligible": false,
            "wfh": false
        },

        {
            "firstname": "Anna",
            "department": "Tech",
            "designation":"Executive",
            "salary": 25600,
            "raiseeligible": false,
            "wfh": true
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
    let total = 0;

    for(const employee of employees){
        const article = document.createElement("article")
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myPara4 = document.createElement("p");
        const myPara5 = document.createElement("p");
        
        myH2.textContent = employee.firstname;
        myPara1.textContent = `Department: ${employee.department}`;
        myPara2.textContent = `Designation: ${employee.designation}`;

        //Q5
        if(employee.raiseeligible === true){
            employee.salary *= 1.1;
            employee.raiseeligible = false;
            total += employee.salary;
        } 
        else{
            total += employee.salary;
        }

        myPara3.textContent = `Salary $${employee.salary}`;
        myPara4.textContent = `Raise Eligible: ${employee.raiseeligible}`;

        //Q6
        myPara5.textContent = `Working from home: `;
        if(employee.wfh === true){
            myPara5.textConent += "Yes";
        }
        else{
            myPara5.textContent += "No";
        }
        console.log(myPara5);

        article.appendChild(myH2);
        article.appendChild(myPara1);
        article.appendChild(myPara2);
        article.appendChild(myPara3);
        article.appendChild(myPara4);
        article.appendChild(myPara5);
        section.appendChild(article);
        console.log(section);
    }

    const totalSalary = document.createElement('h3');
    totalSalary.textContent =  `Total Salaries: $${total}`;
    section.appendChild(totalSalary);
    console.log(totalSalary);

}

