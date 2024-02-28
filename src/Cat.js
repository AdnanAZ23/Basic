import { useGetFact } from "./useGetFact";

export const Cat = () => {
    const { data, refetchData } = useGetFact();
    return (
        <div>
            <h1>{data?.fact}</h1>
            <button onClick={refetchData}>Refetch</button>
        </div>
    );
};