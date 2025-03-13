const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];
  // Function to display all employees
  function displayEmployees(){
const totalemployee=employees.map((employee,index) => `<p> ${employee.id} :${employee.name} - ${employee.age}-${employee.department}:-${employee.salary}</p>`).join(' ');
    document.getElementById('employeesDetails').innerHTML=totalemployee;
  }
  function calculateTotalSalaries(){
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    
  }
  function displayHREmployees(){
    const hremployee=employees.filter(employee=> employee.department === 'HR');
    const hremployeedisplay=hremployee.map((employee,index)=>`<p> ${employee.id} :${employee.name} - ${employee.age}-${employee.department}:-${employee.salary}</p>`).join(' ');
    document.getElementById('employeesDetails').innerHTML=hremployeedisplay;
  }

  function findEmployeeById(employeeId){
    const foundemployee=employees.find(employee=> employee.id===employeeId);
    if (foundemployee) {
      document.getElementById('employeesDetails').innerHTML=`<p>${foundemployee.id}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML='yo...';
    }
  }