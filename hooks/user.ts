import { fetchJson } from "@/lib/api";
import { User } from "@/pages/api/user";
import { useMutation, useQuery, useQueryClient } from "react-query";
interface SignInVariables {
    email: string;
    password: string;
  }
  
  interface UseSignInResult {
    signIn: (email: string, password: string) => Promise<boolean>;
    signInError: boolean;
    signInLoading: boolean;
  }
  const USER_QUERY_KEY = 'user';

export function useSignOut(){
    const queryClient = useQueryClient();
    const mutation = useMutation(async()=>fetchJson('/api/logout'));
    return async ()=>{
        await mutation.mutateAsync();
        queryClient.setQueryData(USER_QUERY_KEY,undefined);
    }
}
export function useSignIn():UseSignInResult{
    const queryClient = useQueryClient();
    const mutation = useMutation<User, Error, SignInVariables>(async({email, password})=>{
        return await fetchJson("/api/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        })
    })
    return {
        signIn: async (email:string, password:string) => {
            try {
                const user = await mutation.mutateAsync({ email, password });
                queryClient.setQueryData(USER_QUERY_KEY, user);
                return true;
              } catch (err) {
                return false;
              }
        },
        signInError: mutation.isError,
        signInLoading: mutation.isLoading
    }
}

export function useUser() {
    const query = useQuery(USER_QUERY_KEY,async()=>{
        try{
        return await fetchJson('/api/user');
        }catch(err){
            return undefined;
        }
    },{
        cacheTime:Infinity,
        staleTime:30000
    });
    return query.data;
    
}

export default useUser;