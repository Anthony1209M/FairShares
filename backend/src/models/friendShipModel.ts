import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const friendShipSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    friendId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
});

const Friendship = mongoose.model('Friendship', friendShipSchema);

export default Friendship;