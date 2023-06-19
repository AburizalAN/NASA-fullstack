import useSWR from "swr";
import * as React from "react";

const useSWRHandler = (
  uri: string,
  fetcher: () => void,
  options: {} = {},
) => {
  const swr = useSWR(uri, fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 0,
    ...options,
  });
  const { error } = swr;
  React.useEffect(() => {
    if (!error) return;
    const description: string = error?.response?.data.message ?? "Someting went wrong";
    console.log("error description", description);
  }, [error])
  return swr;
}

export default useSWRHandler;