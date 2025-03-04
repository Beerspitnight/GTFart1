// src/data/storyData.js
const storyData = [
    {
      id: 'start',
      text: 'You wake up in a magical forest...',
      image: '/images/forest.png',
      choices: [
        { text: 'Go north', nextId: 'northPath' },
        { text: 'Go east', nextId: 'eastPath' }
      ]
    },
    {
      id: 'northPath',
      text: 'You see a wise owl perched on a tree...',
      image: '/images/owl.png',
      choices: [
        { text: 'Talk to the owl', nextId: 'talkOwl' },
        { text: 'Ignore the owl', nextId: 'ignoreOwl' }
      ]
    },
    // ... more story nodes ...
  ];
  
  export default storyData;
  