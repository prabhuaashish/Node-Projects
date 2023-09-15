const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sample", "aashish", "Aashish@99", {
  dialect: "mysql",
  host: "localhost",
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`DB Connected`.cyan.underline.bold);
  } catch (error) {
    console.error("Unable to connect to the database:".red.bold, error);
  }
};

checkConnection();

module.exports = sequelize;
