import { useState } from "react"

export let useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    let fetching = async (params) => {
        try {
            setIsLoading(true);
            await callback(params);
        } catch (e) {
            setError(e.message);
        }
        finally{
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}