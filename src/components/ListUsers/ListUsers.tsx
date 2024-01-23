import { useQuery } from "@apollo/client";
import { GetUsersResponse, GET_USERS } from "../../graphql";

export const ListUsers = () => {
  const { data, loading, error } = useQuery<GetUsersResponse>(GET_USERS);

  return (
    <div>
      {!data && loading && <p>Loading...</p>}
      {data && !loading && (
        <ul>
          {data.findManyUsers.map(({ id, email }) => (
            <li key={id}>
              <p>{email}</p>
            </li>
          ))}
        </ul>
      )}
      {!data && !loading && error && <p>Error: {error.message}</p>}
    </div>
  );
};
