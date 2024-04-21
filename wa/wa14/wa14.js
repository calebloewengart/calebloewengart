async function populate(){
    const requestURL = "calebloewengart.me/wa/wa14/humanResources.json";
    const request = new Request (requestURL);

    const response = await fetch(request);
    const humanResources = await response.json();

    populateEmployees(humanResources);
}

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