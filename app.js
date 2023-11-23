const express = req('express')
const app = express()
const workControll=require('./controller/workerControll');
const curseontroll=require('./controller/cursControll');
const port=8000;

app.get('/worker',workControll.getAllworkerControll);
app.get("/worker/:id" ,workControll.getOneworkerControll);
app.get('/curses',curseontroll.getCuresContrall);
app.get('/curses/:id',curseontroll.getByIdCuresContrall);



app.listen(port, () => {
    console.log("listening on http://localhost:8000");
})