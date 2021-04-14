const Course = require('./../models/courseModel');

exports.getAllCourse = async (req, res) => {
  try {
    const course = await Course.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: course.length,
      data: {
        course
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    // Instructor.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    // const newInstructor = new Instructor({})
    // newInstructorsave()

    const newCourse = await Course.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        course: newCourse
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
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
        course
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

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
