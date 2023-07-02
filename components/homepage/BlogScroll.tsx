import { reviewsA } from "@/dummy";
import BlogCard from "./BlogCard";
import { ScrollArea } from "../ui/scroll-area";

const BlogScroll = () => {
  return (
    <section className="section-py bg-slate-100 md:px-6">
      <div className="container">
        <ScrollArea className="h-max border pb-6">
          <div className="flex w-full gap-6">
            {reviewsA.map((item) => (
              <BlogCard key={item.id} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default BlogScroll;

{
  /* <div className="left-0 flex items-start justify-start gap-6 overflow-hidden overflow-x-scroll">
{reviewsA.map((item) => (
  <BlogCard key={item.id} />
))}
</div> */
}
