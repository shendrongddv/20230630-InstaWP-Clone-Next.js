interface BlogCardProps {}

const BlogCard: React.FC<BlogCardProps> = ({}) => {
  return (
    <div className="aspect-video w-10/12 flex-shrink-0 border first:ml-6 md:w-1/4">
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quibusdam autem nihil veniam suscipit maxime saepe possimus numquam
          iure dignissimos. Unde temporibus aspernatur quo maxime corporis
          laborum similique dolores? Possimus, illum odit?
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
