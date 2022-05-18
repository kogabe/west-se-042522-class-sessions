import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  console.log(albums)
  // we need to use .map instead of .forEach because we need to create
  // a new array of JSX components that use the data from the original array as props
  const albumCards = albums.map(album => (
    <AlbumCard 
      key={album.id}
      name={album.name}
      image={album.image}
      genre={album.genre}
    />
    ))
    console.log(albumCards)
  return (
    <section className="albums">
      {albumCards}
      {/* you can also do your map inside your returned JSX as below rather than in the function body as I did above. It's a preference */}
      {/* {albums.map(album => (
    <AlbumCard 
      key={album.id}
      name={album.name}
      image={album.image}
      genre={album.genre}
    />
    ))} */}
    </section>
  );
}

export default AlbumList;
