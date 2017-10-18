const express = require("express")
const app = express()

app.get("/test", function(req, res) {
    res.type("text/plain")
    res.send("this is a test...")
})

app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).render("error")
})
app.use(function(req, res) {
    res.status(404).render("not-found")
})

app.post("/process-concat", function(req, res) {
    console.log("Recevied concat from" + req.body.name + "<" + req.body.email + ">")
    try{
        return res.xhr ? res.render({success: true}) : res.redirect(303, "/thank-you")
    } catch(ex) {
        return res.xhr ? res.json({error: "Database error"}) : res.redirect(300, "/database-error")
    }
})

app.get("api/tours", function(req, res) {
    res.json(tours)
})

app.put("api/tour/:id", function(req, res) {
    var p = tours.some(function(p) {
        p.id == req.params.id
    })
    if(p) {
        if(req.query.name) {
            p.name = req.query.name
            if (req.query.price) {
                p.price = req.query.price
                res.json({success: true})
            }
        }
    } else {
        res.json({error: "No such tour exists..."})
    }
})

app.del("api/tour/:id", function(req, res) {
    var i
    for (var i = tours.length -1; i >= 0; i--) {
        if ( tours[i].id == req.params.id) {
            break
        }
        if (i >= 0) {
            tours.splice(i, 1)
            res.json({success: true})
        } else {
            res.json({error: "No such tours exsite."})
        }
    }
})

app.listen(3000, function(req, res) {
    console.log("running express ...")
})
