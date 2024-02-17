const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
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
