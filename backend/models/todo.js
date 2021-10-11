const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    description: { type: String, required: true },
    checked: { type: Boolean, default: false },
}, { timestamps: true });//created_at and updated_at fields are automatically generated by setting timestamps:true;
//_id field for a mongodb Document can be used as the id for a ToDo

const ToDo = mongoose.model('todo', toDoSchema);

module.exports = ToDo;