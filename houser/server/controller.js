module.exports ={

    read: (req,res,next)=>{
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.read_houses()
        .then((houses)=>res.status(200).send(houses))
        .catch((error)=>{console.log(error); res.status(500).send()});
    }
    

}