class HomeController {
    
    // [GET] /
    index(req, res) {
        res.render('home', {
            blocked_id: 123,
        });
    }

    // [POST] /store
    store(req, res) {
        res.json(req.body);
    }

}

module.exports = new HomeController;