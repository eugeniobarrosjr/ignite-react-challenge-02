interface SelectedGenreProps {
  title: string;
}

export function Header(props: SelectedGenreProps) {
  return <header>
    <span className="category">Categoria:<span> {props.title}</span></span>
  </header>
}