import Storycard from "../StoryCards"


export default function CardColumn({ cardarray }) {

  return (
    <div style={{display: "block"} 

  }>
      {cardarray.map((storyobject) => {
        return <Storycard title={storyobject.title} summary={storyobject.summary} author={storyobject.author}/>


      })}
    </div>
  )
}