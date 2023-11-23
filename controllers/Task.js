const listarTasks = async (req, res = express.request)=>{
    const tasks = await Task.find().populate('user','name');

    try{
        res.status(200).json({
            ok: true,
            tasks
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error Internal'
        })
    }
}