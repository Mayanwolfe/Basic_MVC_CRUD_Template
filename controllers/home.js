const ItemList = require('../models/ItemList')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const items = await
            ItemList.find()
            res.render("index.ejs", { itemList: items });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createItem: async (req, res) => {
        const newItem = new ItemList(
            {
                textinput: req.body.textinput,
                numinput: req.body.numinput
            });
        try {
            await newItem.save();
            console.log(newItem)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}