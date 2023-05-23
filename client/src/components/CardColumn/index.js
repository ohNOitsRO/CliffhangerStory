import Storycard from "../StoryCards"

// Helper function to limit words
const limitWords = (content, wordLimit) => {
  let words = content.split(" ");
  if(words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  } else {
    return words.join(" ");
  }
};

export default function CardColumn({ cardarray }) {
  return (
    <div style={{ display: "block" }}>
      {cardarray.map((storyobject) => {
        // Limit the content to the first 20 words
        const limitedContent = limitWords(storyobject.content, 20);
        return (
          <Storycard 
            title={storyobject.title} 
            content={limitedContent} 
            author_id={storyobject.author_id}
          />
        );
      })}
    </div>
  );
}
