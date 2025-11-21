import NavNoteCard from "./NavNoteCard";

export default function NavNoteCardList({ data, loading }) {
  return (
    <div className="rounded-custom-16 gap-custom-50 flex flex-col">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <NavNoteCard key={item._id} item={item} />)
      )}
    </div>
  );
}
