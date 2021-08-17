import useSWR from "swr";
import axiosInstance from "../utils/client";


export const useTodos = () => {
    const { data, error, mutate } = useSWR('/todos', async (url) => {
        const { data: todos } = await axiosInstance.get(url);
        return todos;
    });

    const todos = data || [];
    const loading = !data && !error;

    return {
        todos,
        loading,
        error,
        mutate
    };
};
