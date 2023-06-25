import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import Login from "@/components/features/auth/Login";
import { Spinner } from "@/components/reusable";

const axios = useAxios();

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const { data, isValidating: loading } = useSWR("/get-user-info", async () => {
      try {
        const res = await axios.get('/auth/me')
        if (res) {
          return res.data.data;
        }
      } catch (err) {
        throw err;
      }
    });
    return loading ? (
      <div className="w-full h-full grid place-items-center">
        <div className="m-auto">
          <Spinner width={40} height={40} withColor={true} />
        </div>
      </div>
    ) : data ? (
      <Component {...props} />
    ) : (
      <Login {...props} />
    );
  };
};

export default withAuth;
