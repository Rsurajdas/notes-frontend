import NavCard from "./NavCard";

export default function NavCardList({ data }) {
  return (
    <div className="rounded-custom-16 gap-custom-50 flex flex-col">
      {data.map((item) => (
        <NavCard key={item.id} item={item} />
      ))}
    </div>
  );
}
