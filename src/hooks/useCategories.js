
import useSWR from "swr";
import axiosInstance from "../utils/client";

export const useCategories = () => {
    const { data, error, mutate } = useSWR('/categories', async (url) => {
        const { data: todos } = await axiosInstance.get(url);
        return todos;
    });

    const categories = data || [];
    const isLoading = !data && !error;

    return {
        categories,
        isLoading,
        mutate
    };
}