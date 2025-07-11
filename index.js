const express=require('express');
const cors=require('cors');
const connectDb=require('./config/db.js')
const app=express();

app.use(cors({
    origin: 'https://url-shortener-frontend-two-alpha.vercel.app',
    methods: ['GET', 'POST'],
}));
app.use(express.json());

// db connection`
connectDb();

// routes
app.use("/api",require('./routes/urlshort.route.js'));


const PORT=process.env.PORT;
app.listen(PORT,() => console.log(`Server running on ${PORT}`));