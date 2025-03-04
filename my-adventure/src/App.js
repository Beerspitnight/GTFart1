import React, { useState } from 'react';
import storyData from './data/storyData';
import StoryNode from './components/StoryNode';

function App() {
  // The ID of the current story node
  const [currentNodeId, setCurrentNodeId] = useState('start');

  // Find the object in storyData whose id matches currentNodeId
  const currentNode = storyData.find(node => node.id === currentNodeId);

  // This function updates the currentNodeId state
  const handleChoiceSelect = (nextId) => {
    setCurrentNodeId(nextId);
  };

  return (
    <div>
      <h1>My Choose-Your-Own Adventure</h1>
      <StoryNode node={currentNode} onChoiceSelect={handleChoiceSelect} />
    </div>
  );
}

export default App;
