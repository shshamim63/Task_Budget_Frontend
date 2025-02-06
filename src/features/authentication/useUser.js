import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { USER_QUERY_KEY } from "../../utils/constants";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getCurrentUser,
  });

  return { user, isLoading };
}
