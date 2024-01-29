import express, {Request, Response} from 'express'
import {createDB} from "./db";

export const app = express()
app.use(express.json())

export const db = createDB()
type ParamsType = {id:string}
type ResBodyType = any[]
type ReqBodyType = {title: string}
type QueryType = {search: string}

// export const getVideos = (req: Request, res: Response) => {
export const getVideos = (req: Request<ParamsType, ResBodyType, ReqBodyType, QueryType>, res: Response<ResBodyType>) => {
    // console.log(req.params.id)
    console.log(req.query.search)

    res
        .status(200)
        // .send(db.videos)
        .json(db.videos)

}

// app.get('/videos/:id', getVideos)
app.post('/videos/:id', getVideos)