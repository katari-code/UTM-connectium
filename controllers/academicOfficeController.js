const Staff = require('./../models/instructorModel');

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: staff.length,
      data: {
        staff
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    // Instructor.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        staff
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createStaff = async (req, res) => {
  try {
    // const newInstructor = new Instructor({})
    // newInstructorsave()

    const newStaff = await Staff.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        staff: newStaff
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(
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
        staff
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);

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
