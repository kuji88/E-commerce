const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const DB = require("./config/Database");
const { CatagoryRouter } = require("./routers/CatagoriesRoute");
const { ApiError } = require("./utils/ApiError");
const globalError = require("./middlewares/errorHandler");
const { SubCatagory } = require("./routers/SubCatagoryRoute");

//* Express app
const app = express();

dotenv.config({ path: "config.env" });

//* Middlewears

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode:${process.env.NODE_ENV}`);
}

//!Routes
app.use("/api/v1/catagory", CatagoryRouter);
app.use("/api/v1/catagory/subCatagory", SubCatagory);

//* Route Error
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route${req.originalUrl}`, 404));
});

//* Globale handler
app.use(globalError);

//* Server creator
const server = app.listen(process.env.PORT || 8000, () => {
  DB();
  console.log(`this app working on port 8000`);
});

process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection happend: ${err.name} ${err.message}`);
  server.close(() => {
    console.error("shutting down");
    process.exit(1);
  });
});
