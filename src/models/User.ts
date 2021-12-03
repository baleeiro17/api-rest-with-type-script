import { UserInterface } from '../interfaces/User';
import mongoose, { model, Document} from 'mongoose';

export interface UserModel extends UserInterface, Document {
    fullName(): string;
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }, 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }, 
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

UserSchema.methods.fullName = function (): string {
    return this.firstName.trim() + ' ' + this.lastName.trim();
}

const User = model<UserModel>('User', UserSchema);

export default User;