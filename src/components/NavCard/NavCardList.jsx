import NavCard from "./NavCard";

export default function NavCardList({ data, loading }) {
  return (
    <div className="rounded-custom-16 gap-custom-50 flex flex-col">
      {loading ? (
        <p>Loading...</p>
      ) : data?.length ? (
        data.map((item) => <NavCard key={item._id} item={item} />)
      ) : (
        <div className="rounded-custom-8 border-custom-neutral-200 bg-custom-neutral-100 p-custom-100 border">
          <p className="text-preset-5">
            You don’t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        </div>
      )}
    </div>
  );
}
