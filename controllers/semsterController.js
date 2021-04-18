const Semester = require('./../models/semsterModel');

exports.getAllSemsters = async (req, res) => {
  try {
    const semester = await Semester.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: semester.length,
      data: {
        semester
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getSemster = async (req, res) => {
  try {
    const semster = await Semester.findById(req.params.id);
    // Semster.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        semster
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createSemster = async (req, res) => {
  try {
    // const newSemster = new Semster({})
    // newSemster.save()

    const newSemster = await Semester.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        semster: newSemster
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateSemster = async (req, res) => {
  try {
    const semester = await Semester.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        semester
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteSemster = async (req, res) => {
  try {
    await semester.findByIdAndDelete(req.params.id);

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
