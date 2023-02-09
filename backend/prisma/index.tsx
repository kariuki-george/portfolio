import { trpc } from "@/utils/trpc";

export default function IndexPage() {
  const hello = trpc.notes.get.useQuery();
  // f7cb3d78-c173-4c08-a4b8-9a9fbc418d65(hello.data);

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{JSON.stringify(hello.data[0])}</p>
    </div>
  );
}
