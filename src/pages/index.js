import Link from "next/link";
import Counter from "../components/Counter";
import Users from "../components/Users";
import { incrementCounter } from "../redux/counter/action";
import { wrapper } from "../redux/store";
import { addUser } from "../redux/users/action";

export default function Home() {
  return (
    <div>
      <Counter />
      <Users />
      <Link href="/oder">oder</Link>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(incrementCounter());
});
