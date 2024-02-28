import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetFact = () => {
    const { data, refetch, isLoading, error } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        },
    });

    const refetchData = () => {
        alert("Data Refetched");
        refetch();
    };

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <h1>Link is broken...</h1>

    return { data, refetchData, isLoading };
};