import { blogSmall } from "@/dummy";
import { Dot, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogSmall = () => {
  return (
    <section className="section-py px-6">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <h2 className="h2 font-display font-bold text-primary">Blogs</h2>

          {/* # */}
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Col */}
            {blogSmall?.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-xl shadow">
                <div className="overflow-hidden">
                  <Image
                    src={`/blogs/${item.image}`}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <span>{item.author}</span>
                    <Dot size={16} />
                    <span>{item.date}</span>
                  </div>
                  <Link href={item.href} className="group relative">
                    <h3 className="h4 mt-3 line-clamp-2 font-display font-bold text-primary group-hover:underline">
                      {item.title}
                      <MoveUpRight
                        size={16}
                        className="absolute bottom-1 right-0 opacity-75"
                      />
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSmall;
