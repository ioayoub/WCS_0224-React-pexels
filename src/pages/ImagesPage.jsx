import {useEffect, useState} from "react";
import Card from "../components/Card.jsx";

export default function ImagesPage() {

  const [search, setSearch] = useState(null);
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    //Récupère la première valeur du formulaire (input)
    setSearch(e.target[0].value)
  }

  useEffect(() => {
    if (search) {
      fetch(`https://api.pexels.com/v1/search?query=${search}`, {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_TOKEN
        }
      })
        .then(res => res.json())
        .then(data => setResult(data));
    }
  }, [search])

  return (
    <section className="min-h-screen">
      <h1 className="text-4xl text-center my-12">Articles page</h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input type="text" className="border border-black p-1" placeholder="Ours, Canaris, Chat..."/>
        <button type="submit" className="p-2 bg-black text-white">Rechercher</button>
      </form>

      {!search ? (
        <h2 className="text-center text-xl my-12">Veuillez saisir une recherche pour commencer</h2>
      ) : (
        <>
          <h2 className="text-center text-xl my-12">Votre recherche : {search}</h2>
          <div className="flex gap-4 justify-center flex-wrap my-12">
            {result.photos?.length > 0 ? (
              result.photos.map((d) => (
                <Card key={d.id} photographer={d.photographer} alt={d.alt} image={d.src.original} id={d.id}/>
              ))) : (
              <h2 className="text-center text-xl my-12">Aucune photo ne correspond à {search}</h2>
            )}
          </div>
        </>
      )}

    </section>
  )
}