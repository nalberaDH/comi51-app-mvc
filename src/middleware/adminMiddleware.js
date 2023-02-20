const isAdmin = (req,res, next) => {
    const { isAdmin } = req.body;
    if(isAdmin){
        next();
    }else{
        res.status(403).send('Lo siento no sos admin');
    }

}

module.exports = isAdmin;