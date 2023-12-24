import { Mojis } from './kaomoji'
import express from "express"

const app = express()
app.use(express.json())

const port: number = 8080

app.get("/", (req: any, res: any) => {
    const category = req.query.category
    const moji = category ? Mojis[category] : Object.values(Mojis).flatMap(i => i)
    const result = JSON.stringify({
        code: 200,
        kaomoji: `${moji[Math.floor(Math.random() * moji.length)]}`
    })
    res.end(result)
})

app.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`)
})