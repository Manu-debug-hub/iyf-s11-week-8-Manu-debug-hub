import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle">
      <h3>Toggle</h3>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}
