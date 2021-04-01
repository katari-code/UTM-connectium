const Semester = require('./../models/semsterModel');
exports.getAllSemsters = async (req, res) => {
  try {
    // EXECUTE QUERY
    // const features = new APIFeatures(Semster.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    const Semsters = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: Semsters.length,
      data: {
        Semsters
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
    const semster = await Semster.findById(req.params.id);
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

    const newSemster = await Semster.create(req.body);

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
    const semster = await Semster.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

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

exports.deleteSemster = async (req, res) => {
  try {
    await Semster.findByIdAndDelete(req.params.id);

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
