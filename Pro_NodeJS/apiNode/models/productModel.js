const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
    _id:{type: ObjectId},
    ma: String,
    name: String,
    image: String,
    price_now: Number,
    price_sale: Number,
    quantity: Number,
    category_id: {
        type: ObjectId,
        ref: 'category' // Tham chiếu đến collection 'category'
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
