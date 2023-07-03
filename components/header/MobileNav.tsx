import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sites",
    href: "/",
    description: "Instant WordPress sites within seconds",
  },
  {
    title: "Templates",
    href: "/",
    description: "Save sites for instant re-use",
  },
  {
    title: "Configurations",
    href: "/",
    description: "Pre-set starter configurations",
  },
  {
    title: "Tools",
    href: "/",
    description: "Browser based code editor and tools",
  },
  {
    title: "Deployments",
    href: "/",
    description: "Connect Git with WordPress",
  },
  {
    title: "Integrations",
    href: "/",
    description: "Chrome extension + many more..",
  },
];

const MobileNav = () => {
  return (
    <div className="mt-16 space-y-2 border">
      {components?.map((item) => (
        <Button
          key={item.title}
          variant="ghost"
          className="w-full justify-start"
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default MobileNav;
