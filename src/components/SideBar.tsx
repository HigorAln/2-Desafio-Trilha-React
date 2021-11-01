import {Button} from './Button'
import React, { SetStateAction} from 'react'

type Genres = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type SideBarProps = {
  genres: Genres[];
  setSelectedGenreId: React.Dispatch<SetStateAction<number>>;
  selectedGenreId: number
}

export function SideBar({ genres, setSelectedGenreId, selectedGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return(
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  )
}