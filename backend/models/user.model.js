import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    regnumber:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required: true,
    },
    myproducts: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    mypurchases: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
       
    }]
});

const User = mongoose.model('User', userSchema);

export default User;