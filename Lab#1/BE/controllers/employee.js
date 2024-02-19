const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id; // Get id from request parameters
  const index = employee.findIndex(emp => emp.id === id); // Find the index of the employee in the array
  
  if (employee.some(emp => emp.id === id)) {
    employee.splice(index, 1); //Remove employee, then rearrange the rest of the array starting from his index
    res.status(200).json({ message: 'Employee deleted successfully' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

// TODO
  exports.createEmployee = async (req, res, next) => {
    const {id, name} = req.body;
    if (employee.some(emp => emp.id === id)) {
      res.status(400).json({ message: 'Employee with the provided ID already exists' });
    } else {
      employee.push({ id, name });
      res.status(201).json({ message: 'Employee created successfully' });
    }
  };
