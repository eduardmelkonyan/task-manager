const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//   // const task = await Task.findById("62a623a536ad842397c3d4d9")
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

//   const user = await User.findById('62a61de05bdfcc15aa833582')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks);
// }

// main()