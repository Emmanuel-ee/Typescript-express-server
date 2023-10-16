import http from 'http'
import app from './src/app'
import { connectDataBase } from './src/services/connectDB'




const server = http.createServer(app)

async function startServer() {
    await connectDataBase()
        .then(() => {
            server.listen(3000, () => {
                console.log('server is listening on port 3000. http://localhost:3000')
            })
        }).catch((error) => {
            throw new Error("Error Connecting to Data base")
        })
}

startServer()
