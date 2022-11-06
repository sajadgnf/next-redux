import Link from "next/link";
import React from "react";
import Counter from "../components/Counter";
import Users from "../components/Users";
import { wrapper } from "../redux/store";
import { addUser } from "../redux/users/action";

const oder = () => {
  return (
    <div>
      <Counter />
      <Users />
      <Link href="/">oder</Link>
    </div>
  );
};

export default oder;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${Math.floor(
        Math.random() * 10 + 1
      )}`
    );
    const { name } = await data.json();

    store.dispatch(addUser(name));
  }
);
