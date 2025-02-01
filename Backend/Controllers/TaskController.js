const TaskModel = require("../Models/TaskModel");

const createTask =async (req, res) =>{
    //body se jobhi data aya usko fetch krke data me store krliya
    const data = req.body;
    try {
        //ab jobhi data h uska model bana liya usme save krliya
        const model = new TaskModel(data); 
        await model.save();
        //ab agar Task create ho jata h toh response me dena h status code 201 kyuki hum create krre h kisi chiz ko isliye
        //or json me mssg pass krdege ki bhai Task create hogya h or success ki value true krdege
        res.status(201).json({message : "Task is Created", success: true});
        
    } catch (err) {
        res.status(500).json({message: "Failed to Create Task", success:false});
    }
    //Fir agar koi error ata h toh status code 500 dikha denge or msg pass krege fail ka success toh hua ni kaam toh success ki value false krege
}

const fetchAllTasks =async (req,res) =>{
     try {
        const data =await TaskModel.find({});
        res.status(200).json({message: "All Tasks", success: true, data});
     } catch (error) {
        res.status(500).json({message: "Failed to Fetch all Tasks", success: false});
     }

}
const UpdateTaskById =async (req,res) =>{
     try {
        const id  = req.params.id;
        const body = req.body;
        const obj = { $set : {...body } };
       await TaskModel.findByIdAndUpdate(id, obj);
        
        res.status(200).json({message: "Task Updated", success: true});
     } catch (error) {
        res.status(500).json({message: "Failed to Update Tasks", success: false});
     }

}
const DeleteTaskById  =async (req,res) =>{
     try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({message: "Task Deleted", success: true});
     } catch (error) {
        res.status(500).json({message: "Failed to Delete the Tasks", success: false}); 
     }

}

//uske bad isko export kra

module.exports = {
    createTask,
    fetchAllTasks,
    UpdateTaskById,
    DeleteTaskById
}

// fir isko jo TaskRouter h usme add krna h