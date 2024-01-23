import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CreateUserInput,
  CreateUserResponse,
  CREATE_USER,
  GET_USERS,
} from "../../graphql";

export const CreateUserForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [createUser, { loading }] = useMutation<
    CreateUserResponse,
    CreateUserInput
  >(CREATE_USER, {
    awaitRefetchQueries: true,
    refetchQueries: [GET_USERS],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;

    setData({
      ...data,
      [inputName]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, firstName, lastName, password } = data;

    await createUser({
      variables: {
        data: {
          email,
          firstName,
          lastName,
          passwordHash: password,
        },
      },
    });

    setData({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="first-name">Nome</label>
        <input
          id="first-name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="last-name">Sobrenome</label>
        <input
          id="last-name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Carregando..." : "Criar usuário"}
      </button>
    </form>
  );
};
