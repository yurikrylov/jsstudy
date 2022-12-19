import React, { useState } from 'react';
import './App.css';


const files = {
  children: [
    { name: 'package.json' },
    { name: 'readme.md' },
    {
      name: 'node_modules',
      children: [
        {
          name: 'babel',
          children: [
            { name: 'children1' },
            { name: 'children2' }
          ]
        },
        { name: 'eslint' }
      ]
    }
  ]
}

function Entry({ entry, depth }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return <div>
    {entry.children ? (
      <button className="entry" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '- ' : '+ '}
        {entry.name}
      </button>
    ) : (<div>{entry.name}
    </div>)}

    {isExpanded && (
      <div style={{ paddingLeft: `${depth * 10}px` }} >
        {entry.children?.map((entry, index) => (
          <Entry entry={entry} depth={depth + 1} key={index} />
        ))}
      </div>
    )}
  </div>
}

function App() {
  return (
    <div className="App">
      {files.children.map((entry, index) => (
        <Entry entry={entry} depth={1} key={index} />
      ))}
    </div>
  );
}

export default App;
