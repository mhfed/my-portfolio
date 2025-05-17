import { component$, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <Counter initial={10} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const Counter = component$<{ initial: number }>(({ initial }) => {
  const count = useStore({ value: initial });
  return (
    <div>
      <button onClick$={() => count.value++}>+</button>
      <button onClick$={() => count.value--}>-</button>
      {count.value}
      <Link href="/about">About</Link>
    </div>
  );
});
