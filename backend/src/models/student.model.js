import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: String
    },
    college: {
        type: String
    },
    year: {
        type: Number,
        required: true
    }
}, {
  timestamps: true
});

export const Student = mongoose.model('Student', studentSchema);