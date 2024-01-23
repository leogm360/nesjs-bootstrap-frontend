import { gql } from "@apollo/client";

export type CreateUserInput = {
  data: {
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
  };
};

export type CreateUserResponse = {
  createUser: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      createdAt
      email
      firstName
      id
      lastName
      passwordHash
      updatedAt
    }
  }
`;
