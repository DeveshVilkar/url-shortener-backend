const express=require('express');
const cors=require('cors');
const connectDb=require('./config/db.js')
const app=express();

// const allowedOrigins =[
//     'https://url-shortener-frontend-two-alpha.vercel.app',
//     'http://localhost:4200'
// ]

// // middleware
// app.use(cors({
//     origin: function (origin, callback) {
//         if(allowedOrigins.includes(origin)){
//             return callback(null,true);
//         }else{
//             return callback(new Error('Not allowed by cors'))
//         }
//     },
//     methods: ['GET', 'POST'],
// }));
app.use(cors());
app.use(express.json());

// db connection`
connectDb();

// routes
app.use("/api",require('./routes/urlshort.route.js'));


const PORT=process.env.PORT;
app.listen(PORT,() => console.log(`Server running on ${PORT}`));