import { useSearchParams } from "react-router-dom";

// For updating the query parameter of a route
export function useSetQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setQueryParams = (params: any) => {
    const updatedParams = new URLSearchParams(searchParams);

    // Set individual query parameters
    Object.keys(params).forEach((key) => {
      updatedParams.set(key, params[key]);
    });

    // Replace the current search parameters with the updated ones
    setSearchParams(updatedParams);
  };

  return { setQueryParams };
}
