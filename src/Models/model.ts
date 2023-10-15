interface Datatype {
    name: string,
    Age: number,
    Job: string
}


let Data: Datatype[] = [
    {
        name: "Samuel Ememe",
        Age: 27,
        Job: "Doctor"
    },
    {
        name: "Comfort Ememe",
        Age: 23,
        Job: "Diplomat"
    },
    {
        name: "Charles Idowu",
        Age: 32,
        Job: "Engineer"
    },
]

function getAllData(): Datatype[] {
    return Data
}

function addNewData(newData: Datatype): Datatype {
    Data.push(newData)
    return newData
}

function deleteData(name: string) {
    const DataToDelete = Data.find((x) => x.name === name);
    console.log(DataToDelete);

    if (!DataToDelete) {
        console.log("No Data with such Name")
        return null
    }


    const index = Data.indexOf(DataToDelete);
    if (index !== -1) {
        Data.splice(index, 1); // Removes the object from the array
    }
    return DataToDelete
}

function editData(name: string, newData: Partial<Datatype>) {
    const index = Data.findIndex((x) => x.name === name);

    if (index === -1) {
        console.log("No Data with such Name");
        return null;
    }

    const editedData = {
        ...Data[index],
        ...newData
    };

    Data[index] = editedData; // Update the data in the array

    return editedData;
}


export { Data, getAllData, addNewData, deleteData, editData }