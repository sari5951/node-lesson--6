
const fs = require("fs");
const FileWorker = require('../data/workers.json');

exports.getAllworkerControll = (req, res) => {
    fs.readFile(FileWorker, 'utf8', (err, data) => {
        if (err) {
            console.log('err');
            res.status(500).json("eror");
            return;
        }
        const worker = JSON.parse(data);
        res.json(worker);
    });

};
exports.getOneworkerControll = (req, res) => {
    const OneWorkerId = req.params.id;
     fs.readFile(FileWorker, 'utf8', (err, data) => {
        if (err) {
            console.log('err');
            res.status(500).json("eror");
            return;
        }
        const employee=JSON.parse(data);
        const workerid=employee.find((w)=w.id===OneWorkerId);
        if(workerid)
        res.json(workerid)
        else
        res.json({});
    });
};




