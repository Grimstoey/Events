import express, {Request, Response} from 'express'
// import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
// import type { eventModel as Event } from "./generated/prisma/models/event";
import eventRoute from './routes/EventRoute';




const app = express()
const port = 3000
app.use(express.json())


//////// route
app.use('/events',eventRoute);











app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

