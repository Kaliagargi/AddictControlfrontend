import { Redirect,Stack } from "expo-router";

export default function AuthRoutsLayout(){
    const {isSignedIn}= useAuth();

    if(isSignedIn){
        return <Redirect href={'/'}/>
    }
    return <Stack/>
}