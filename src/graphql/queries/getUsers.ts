import { gql } from "@apollo/client";

export type GetUsersResponse = {
  findManyUsers: Array<{
    id: string;
    email: string;
    lastName: string;
    firstName: string;
    passwordHash: string;
    updatedAt: Date;
    createdAt: Date;
  }>;
};

export const GET_USERS = gql`
  query GetUsers {
    findManyUsers {
      id
      updatedAt
      passwordHash
      lastName
      firstName
      email
      createdAt
    }
  }
`;
