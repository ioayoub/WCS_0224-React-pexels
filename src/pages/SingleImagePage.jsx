import {useLoaderData} from "react-router-dom";

export default function SingleImagePage() {

  const data = useLoaderData()

  return (
    <div className="my-24">
    <h1 className="text-4xl text-center my-12">{data.alt}</h1>
    <img src={data.src.landscape} alt={data.alt} className="mx-auto" />
    </div>
  )
}