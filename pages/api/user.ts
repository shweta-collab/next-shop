import { fetchJson } from "@/lib/api";
import { NextApiHandler } from "next";
const {CMS_URL} = process.env;
export interface User{
    id: string,
    name: string
}
const handleUser:NextApiHandler = async (req, res) =>{
    const {jwt} = req.cookies;
    if(!jwt){
        res.status(401).end();
        return;
    }
    try{
        const user = await fetchJson(`${CMS_URL}/users/me`,{
            headers: {'Authorization':`Bearer ${jwt}`}
        });
        res.status(200).json({
            id: user.id,
            name: user.username
        })
    }catch(err){
        res.status(401).end();
    }
    
}

export default handleUser;