import useUser, { useSignOut } from "@/hooks/user";
import Link from "next/link";

function NavBar() {
    const user = useUser();
    const signOut = useSignOut();
    //fetching data without react query

    // const [user, setUser] = useState<User>();
    // useEffect(()=>{
    //     (async()=>{
    //         try{
    //             const user = await fetchJson('/api/user');
    //             setUser(user);
    //         }catch(err){
    //             //not signed in
    //         }
            

    //     })();
    // },[]);
    
    return ( 
        <nav>
            <ul className="flex gap-2">
                <li className="text-lg font-extrabold"><Link href="/">Next Shop</Link></li>
                <li role="separator" className="flex-1"></li>
                {user ? (<><li>{user.name}</li><li><button onClick={signOut}>Sign out</button></li></>):(
                <li><Link href="/sign-in">Sign In</Link></li>)}
            </ul>
        </nav>
     );
}

export default NavBar;