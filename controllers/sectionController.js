const Section = require('./../models/sectionModel');

exports.getAllSections = async (req, res) => {
  try {
    const section = await Section.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: Section.length,
      data: {
        section
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getSection = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    // Section.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        section
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createSection = async (req, res) => {
  try {
    // const newSection = new Section({})
    // newSectionsave()

    const newSection = await Section.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        section: newSection
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(
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
        section
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    await Section.findByIdAndDelete(req.params.id);

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
