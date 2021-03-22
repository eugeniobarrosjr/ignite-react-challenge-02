import { Button } from "./Button";

import '../styles/sidebar.scss';

interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface GenresProps {
  genres: Genre[];
  setSelectedGenreId: ((id: number) => void);
  selectedGenreId: number;
}

export function SideBar(props: GenresProps) {

  const { setSelectedGenreId, selectedGenreId, genres } = props;

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (<nav className="sidebar">
    <span>Watch<p>Me</p></span>

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
  </nav>);
}