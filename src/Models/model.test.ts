import { Data, getAllData, addNewData, deleteData, editData } from "./model";


describe('data methods', () => {
    const useData = {
        name: "Gabriel",
        Age: 29,
        Job: 'Full Stack Developer'
    }

    const newData = {
        Age: 29,
        Job: 'Full Stack Developer'
    }

    it('should retrieve all the Data', () => {
        const data = getAllData()
        console.log(data)
        expect(data).toContainEqual({ Age: 27, Job: "Doctor", name: "Samuel Ememe" });
    })

    it('should add Data to Data base array', () => {
        const newData = addNewData(useData)
        console.log(newData)
        console.log(Data)
        expect(Data).toContainEqual(newData)
    })

    it('should delete a Data', () => {
        const remove = deleteData(useData.name)
        console.log(remove)
        expect(Data.includes(useData)).toBe(false)
    })

    it('should Edit a Data', () => {
        const changedData = editData("Samuel Ememe", newData);
        console.log(changedData);
        console.log(Data)
        expect(Data).toContainEqual(changedData)
    });
})