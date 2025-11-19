import NavCard from "./NavCard";

export default function NavCardList({ data, loading }) {
  return (
    <div className="rounded-custom-16 gap-custom-50 flex flex-col">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <NavCard key={item._id} item={item} />)
      )}
    </div>
  );
}
