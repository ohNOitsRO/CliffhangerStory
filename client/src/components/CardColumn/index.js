import Storycard from "../StoryCards"


export default function CardColumn({ cardarray }) {

  return (
    <div style={{display: "block"} 

  }>
      {cardarray.map((storyobject) => {
        return <Storycard title={storyobject.title} content={storyobject.content} author_id={storyobject.author_id}/>


      })}
    </div>
  )
}