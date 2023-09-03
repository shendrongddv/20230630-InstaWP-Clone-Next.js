import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Dot } from "lucide-react";

// Data
import { dataBlogs } from "@/data/content";

export const HomepageBlogs = () => {
  return (
    <section className="section px-6 py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <h2 className="h2 text-gradient font-display font-extrabold">
            Blogs
          </h2>

          {/* # */}
          <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {/* Col */}
            {dataBlogs?.map((item) => (
              <BlogCard
                key={item.id}
                title={item.title}
                author={item.author}
                date={item.date}
                href={item.href}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type TBlogCard = {
  title: string;
  author: string;
  date: string;
  href: string;
  image: string;
};

const BlogCard = ({ title, author, date, href, image }: TBlogCard) => {
  return (
    <li className="group overflow-hidden rounded-xl border transition duration-300 hover:shadow-lg md:rounded-3xl">
      <div className="overflow-hidden">
        <Image
          src={`/blogs/${image}`}
          alt={title}
          width={600}
          height={300}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>{author}</span>
          <Dot size={16} />
          <span>{date}</span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <Link
            href={href}
            aria-label={title}
            className="h4 text-gradient line-clamp-2 w-11/12 text-xl font-bold"
          >
            {title}
          </Link>

          <Link href={href} aria-label={title} className="">
            <ArrowUpRight className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </div>
      </div>
    </li>
  );
};
