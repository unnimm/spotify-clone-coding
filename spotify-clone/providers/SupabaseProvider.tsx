"use client"

import { Database } from "@/types_db"
import { SupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SuperbaseProviderProps {
    children : React.ReactNode;
}

const SupabaseProvider: React.FC<SuperbaseProviderProps> = ({
    children
}) => {
    const [superbaseClient] = useState(()=> createClientComponentClient<Database>());

    return (
        <SessionContextProvider supabaseClient={SupabaseClient}>
            {children}
        </SessionContextProvider>
    )
}
export default SupabaseProvider;