import Image from "next/image";

interface CardUserProps {
  id?: string;
  name: string;
  position: string;
  company: string;
  imageName?: string;
  imageCompany?: string;
  review: string;
}

export const CardUser: React.FC<CardUserProps> = ({
  name,
  position,
  company,
  imageName,
  imageCompany,
  review,
}) => {
  return (
    <div className="w-full rounded-2xl bg-slate-100 p-6 md:w-[48%] md:p-8">
      <p className="font-semibold md:text-lg">{review}</p>
      <div className="mt-6 flex items-center justify-between gap-1">
        <div className="flex items-center gap-3">
          <div className="aspect-square overflow-hidden rounded-full shadow">
            <Image
              src={`/persons/${imageName}`}
              alt={name}
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">{name}</h3>
            <span className="text-xs font-bold opacity-75">
              {position}
              <span className="font-normal">
                {company ? ` - ${company}` : ""}
              </span>
            </span>
          </div>
        </div>
        <div className="hidden w-1/3 md:block">
          {imageCompany ? (
            <Image
              src={`/logos/${imageCompany}`}
              alt={company}
              width={50}
              height={50}
              className="ml-auto h-12 w-auto"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
