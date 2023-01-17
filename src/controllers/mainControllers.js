
const index = (req, res) => {
    res.send('<h1>Bienvenido a la app-mvc</h1>')
};

const about = (req,res) => {
    res.send("Somos el grupo numero ..... About");
}

module.exports = {
    index,
    about
};