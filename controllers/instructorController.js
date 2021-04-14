const Staff = require('./../models/instructorModel');

exports.getAllInstructors = async (req, res) => {
  try {
    const instructor = await Instructor.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: instructor.length,
      data: {
        instructor
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    // Instructor.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        instructor
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createInstructor = async (req, res) => {
  try {
    // const newInstructor = new Instructor({})
    // newInstructorsave()

    const newInstructor = await Instructor.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        instructor: newInstructor
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
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
        instructor
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    await Instructor.findByIdAndDelete(req.params.id);

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
