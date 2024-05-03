import {useLoaderData} from "react-router-dom";
import Card from "../components/Card.jsx";

export default function HomePage() {

  const data = useLoaderData();
  const { photos } = data;

  return (
    <main className="min-h-screen">
      <h1 className="text-4xl text-center my-12">Home page</h1>

      <div className="flex gap-4 justify-center flex-wrap my-12">
      {photos.map((d) => (
        <Card key={d.id} photographer={d.photographer} alt={d.alt} image={d.src.original} id={d.id}/>
      ))}
      </div>
    </main>
  )

}