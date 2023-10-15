import { Request, Response } from "express-serve-static-core"
import { Data, getAllData, addNewData, deleteData, editData} from "../Models/model"


const getData = () => (req: Request, res: Response) => {
    const Data = getAllData()
    res.json(Data)
}


const addData = () => (req: Request, res: Response) => {
    const newData = req.body
    console.log(newData)
    addNewData(newData)
    console.log(Data)
    res.send("<h1>Data Received</h1>")
}

const removeData = () => (req: Request, res: Response) =>{
    const name = req.params.name
    deleteData(name)
}

const edit = () => (req: Request, res: Response)=> {
    const name = req.params.name
    console.log(name)
    const editedData = editData(req.params.name, req.body)
    console.log(editedData)
    console.log(Data)
    return editedData
}


export { getData, addData, removeData, edit }