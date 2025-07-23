import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    experience: {
        type: Number,
        default: 0,
    },
    expertise: [{
        type: String
    }],
    availability: [{
        type: Date
    }],
    rating: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

export const Mentor = mongoose.model('Mentor', mentorSchema);