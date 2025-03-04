import React from 'react';

function StoryNode({ node, onChoiceSelect }) {
  if (!node) return <div>Loading...</div>;

  return (
    <div className="story-node">
      {node.image && <img src={node.image} alt="Scene" className="story-image" />}
      <p>{node.text}</p>
      <div className="choices">
        {node.choices.map((choice, index) => (
          <button key={index} onClick={() => onChoiceSelect(choice.nextId)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StoryNode;
