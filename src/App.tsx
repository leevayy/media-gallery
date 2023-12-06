import { useState } from 'react';
import './App.css';

// import blue from "./assets/blue.png";
// import pink from "./assets/pink.png";
// import orange from "./assets/orange.png";

// const galleryMembers = [
//   pink, blue, orange, pink,
//   orange, pink, blue, orange,
//   pink, blue, orange, blue,
//   orange, pink, blue, orange
// ]

const galleryMembers: string[] = ["https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=360&h=1080",
"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHx8fHwxNzAxODc0NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzY1NTJ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTcwMTg3NDUxOHww&ixlib=rb-4.0.3&q=80&w=1080"];

function App() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <Header />
      {active !== null && <GalleryActiveView previewSrc={galleryMembers.find((_, i) => i === active)!}/>}
      <div className="gallery">
        {galleryMembers.map( (src, i) => <GalleryMember 
          key={i} 
          previewSrc={src} 
          id={i}
          active={active}
          setActive={setActive}
        /> )}
      </div>
    </>
  );
}

export default App;

type PreviewSrc = string;

type GalleryMemberProps = {
  previewSrc: PreviewSrc,
  id: number,
  setActive: React.Dispatch<React.SetStateAction<number | null>>,
  active: number | null
}

function Header() {
  return <div className="header">Gallery</div>
}

function GalleryMember(props: GalleryMemberProps) {
  function handleClick() {
    props.setActive(active => {
      if (active !== props.id) {
        return props.id;
      } 
      return null;
    });
  }

  return <div
    className={`gallery-member ${props.active === props.id ? 'chosen' : ''}`}
    onClick={handleClick}
  >
    <img src={props.previewSrc} alt="blue" />
  </div>
}

type GalleryActiveViewProps = {
  previewSrc: PreviewSrc
}

function GalleryActiveView(props: GalleryActiveViewProps) {
  return <div className="gallery-active-view">
    <img src={props.previewSrc} alt="image" />
  </div>
}