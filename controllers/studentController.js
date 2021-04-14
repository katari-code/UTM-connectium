const Studnet = require('./../models/studentModel');

exports.getAllStudnets = async (req, res) => {
  try {

    const studnet = await Studnet.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: studnet.length,
      data: {
        studnet
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getStudnet = async (req, res) => {
  try {
    const studnet = await Studnet.findById(req.params.id);
    // Studnet.findOne({ _id: req.params.id })
    res.status(200).json({
      status: 'success',
      data: {
        studnet
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createStudnet = async (req, res) => {
  try {
    // const newStudnet = new Studnet({})
    // newStudnet.save()

    const newStudnet = await Studnet.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        studnet: newStudnet
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateStudnet = async (req, res) => {
  try {
    const studnet = await Studnet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        studnet
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteStudnet = async (req, res) => {
  try {
    await Studnet.findByIdAndDelete(req.params.id);

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
