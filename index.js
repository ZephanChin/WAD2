const authRoutes = require("./a_routes/authRouter");

// // Database setup (but using mongoose)
// const PORT = Number.parseInt(process.env.PORT);
// const DB_HOSTNAME = process.env.DB_HOSTNAME;
// const DB_PORT = process.env.DB_PORT;
// const DB_NAME = process.env.DB_NAME;

// const DB_URI = `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;


// //------------------------
// const app = express();
// //create application

// //health check endpoint
// app.get("/", (req, res) => {
//     return res.status(200).json({
//         message: "Server is alive"
//     });
// })

// //routes
// app.use("/auth", authRoutes);
// app.use("/room", roomRoutes);
// app.use("/event", eventRoutes);
// app.use("/roomEvent", roomEventRoutes);

// //start server
// app.listen(PORT, () => {
//     console.log("listening on port:", PORT);
// })