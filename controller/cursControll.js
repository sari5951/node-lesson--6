const fs=require('fs');
const Filecurses=require('../data/curses.json');
exports.getCuresContrall=(req,res)=>{
    fs.readFile(Filecurses,'utf8',(err,data)=>{
        if (err) {
            console.log('err');
            res.status(500).json("eror");
            return;
        }
        const allCurses=JSON.parse(data);
        res.json(allCurses);

    });

};
exports.getByIdCuresContrall=(req,res)=>{
    const cursId=req.params.id;
    fs.readFile(Filecurses,'utf8',(err,data)=>{
        if (err) {
            console.log('err');
            res.status(500).json("eror");
            return;
        }
        const findCurs=Json.parse(data);
        const oneCurse=findCurs.find((c)=c.id===cursId);
        if(oneCurse)
        {
            res.json(oneCurse);
        }else{
            res.json({});
        }
    })

}