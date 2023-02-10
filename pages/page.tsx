import Nav from "@/ui/organisms/Nav/Nav";
import nnn from "@/utils/data/nav/index";

export default function IndexPage() {
  return (
    <div className=" bg-green-300">
      <Nav navItems={nnn.navItems} />
    </div>
  );
}
