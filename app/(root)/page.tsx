import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 25,
      author: { _id: 1, name: "Nelson" },
      _id: 1,
      description: "This is Description",
      image:
        "https://images.unsplash.com/photo-1746483966755-273b467b24fa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Dogs",
      title: "Dog Lives",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h2 className="heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </h2>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result For ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p className="text-30-semibold">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
