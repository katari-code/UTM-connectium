const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// "RegistrationStart": "2021/03/7",
// "RegistrationEnd": "2021/03/10",
// "ClassStart": "2021/03/14",
// "ClassEnd": "2021/06/10",
// "ModaifactionPeriodStart": "2021/03/14",
// "ModaifactionPeriodEnd": "2021/03/18",
// "Seeison":"Summer"

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
