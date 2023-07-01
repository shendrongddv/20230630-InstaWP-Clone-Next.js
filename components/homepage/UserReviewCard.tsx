import Image from "next/image";

interface UserReviewCardProps {
  id?: string;
  name: string;
  position: string;
  company: string;
  imageName?: string;
  imageCompany?: string;
  review: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({
  name,
  position,
  company,
  imageName,
  imageCompany,
  review,
}) => {
  return (
    <div className="w-full rounded-2xl bg-slate-100 p-6 md:w-[48%] md:p-8">
      <p className="text-lg font-semibold">{review}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="aspect-square overflow-hidden rounded-full shadow">
            <Image
              src={`/persons/${imageName}`}
              alt={name}
              width={40}
              height={40}
              className="h-14 w-auto"
            />
          </div>

          <div>
            <h3 className="font-display font-bold">{name}</h3>
            <span className="text-sm font-bold opacity-75">
              {position}
              <span className="font-normal">
                {company ? ` - ${company}` : ""}
              </span>
            </span>
          </div>
        </div>
        <div className="aspect-square h-14 overflow-hidden rounded-full">
          {imageCompany ? (
            <Image
              src={`/logos/${imageCompany}`}
              alt={company}
              width={40}
              height={40}
              className="h-14 w-auto"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default UserReviewCard;
