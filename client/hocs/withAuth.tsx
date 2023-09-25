import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import Login from "@/components/features/auth/Login";
import { Spinner } from "@/components/reusable";
import { useGetUserInfo } from "@/services/authService";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WithAuth = (props: P) => {
    const { data, isValidating: loading } = useGetUserInfo();
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
  return WithAuth;
};

export default withAuth;
