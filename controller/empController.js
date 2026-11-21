const empModel = require("../model/empModel");

const displayData = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.render("home", { result });
  } catch (error) {
    console.log(error);
  }
};

const addData = async (req, resp) => {
  try {
    const { name, salary, dept } = req.body;
    await empModel.create({ name, salary, dept });
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const addForm = (req, resp) => {
  try {
    resp.render("addForm");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { displayData, addData, addForm };
