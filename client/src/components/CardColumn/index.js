import Storycard from "../StoryCards"


export default function CardColumn({ storytype, cardarray }) {

  return (
    <>
      {cardarray.map((storyobject) => {
        return <Storycard title={storyobject.title} summary={storyobject.summary} author={storyobject.author}/>


      })}
    </>
  )
}