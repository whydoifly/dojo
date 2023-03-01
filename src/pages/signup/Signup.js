import { useState } from 'react';

// styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Please select an image file');
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError('Please select a file smaller than 100kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  return (
    <form className='auth-form'>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          type='password'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input type='file' required onChange={handleFileChange} />
      </label>
      {thumbnailError && <div className='error'>{thumbnailError}</div>}
      <button className='btn' onClick={handleSubmit}>Sign up</button>
    </form>
  );
}
