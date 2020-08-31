import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
    type: String,
    order: String, 
    title: String,
    link: String
});

BoardSchema.methods.findOrCreate = (type, order, title, link) => {
    return Board.exists({ title }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            if (doc === true) {
                return Board.find({ title });
            } else {
                const board = new Board(type, order, title, link);
                board.save()
                    .catch(err => {
                        console.log(err);
                    })
                return board;
            }
        }
    });
}

BoardSchema.methods.findAll = (type) => {
    return Board.find({type});
}

const Board = mongoose.model("Board", BoardSchema);

export default Board;

