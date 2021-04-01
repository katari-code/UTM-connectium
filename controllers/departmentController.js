const Department = require('./../models/tutorModel');

exports.getAllDepartments = async (req, res) => {
  try {
    // EXECUTE QUERY
    // const features = new APIFeatures(Department.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    // const Department = await features.query;
    const department = await Department.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: department.length,
      data: {
        department
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const studnet = await Department.findById(req.params.id);
    // Department.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        department
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    // const newDepartment = new Department({})
    // newDepartmentsave()

    const newDepartment = await Department.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        Department: newDepartment
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        department
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
