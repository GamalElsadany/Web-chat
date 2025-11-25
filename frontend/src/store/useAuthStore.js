import { create } from "zustand";


export const useAuthStore = create((set)=>({

    authUser: {name:"GAmaL",_id:123 , age: 21},
    isLooggedIn:false,
    isLoading:false,

    login: () =>{
        console.log("WE jsut logged in ");
        set({isLooggedIn: true, isLoading:true});
    }

}))

