import { trpc } from "@/utils/trpc";

export default function IndexPage() {
  const hello = trpc.notes.get.useQuery();
  // console.log(hello.data);

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{JSON.stringify(hello.data[0])}</p>
    </div>
  );
}
