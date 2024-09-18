import { Account, Client, ID, Avatars, Databases } from 'react-native-appwrite';
import SignUp from '../app/(auth)/sign-up';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sarth.aora_app',
    projectId: '66e03e930031af031e10',
    databaseId: '66e30ea3003586356efb',
    userCollectionId: '66e30f2f002ade642a03',
    videoCollectionId: '66e30f6f003c7be6d486',
    storageId: '66e311ed00096169d881'
}


const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);

const avatars = new Avatars(client)

const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username

        )
        
        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),{
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl
            }
        )


      return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}

export async function SignIn(email, password){
    try {
        const session = await account.createEmailSession
        (email, password)

        return session;

    } catch (error) {
        throw new Error(error);
    }
}