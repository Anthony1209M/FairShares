import User  from "../models/userModel";

export const findAndCreateInvitedUser = async (email: string, name: string) =>
{
        const user = await User.findOne({email}).select("-password -__v");

        let created = false;

        if(!user)
        {
            await User.create({         
            email: email,
            name: name })

            created = true;

        }
        
        return {user, created};
}

export const activateUser = async(user: any, password: string) =>
{


    user.password = password;
    user.isRegistered = true;
           
    await user.save();

    
};