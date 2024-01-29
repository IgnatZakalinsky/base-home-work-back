import express, {Request, Response} from 'express'

export const app = express()

app.use(express.json())

export const PORT = 3003

export const getVideos = (req: Request, res: Response) => {
    res
        .status(200)
        .json({
            videos: [{title: 'super video'}]
        })
}

app.get('/videos', getVideos)

app.listen(PORT, () => {
    console.log('Вжух вжух! ...и сервер запущен.')
})