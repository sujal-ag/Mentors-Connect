import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ["Student", "Mentor"]
    },
    skills: [{
        type: String,
    }]
}, {timestamps: true});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign({
        _id : this._id,
        username: this.username,
        email: this.email,
        fullName: this.fullName,
    }),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1h'
    }
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({
        _id : this._id,
    }),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '10d'
    }
}

export const User = mongoose.model("User", userSchema);