import Post from '../post/Post';
import './posts.css';
import { v4 as uuidv4 } from 'uuid';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {posts.map((p) => (
        <Post key={uuidv4()} post={p} />
      ))}
    </div>
  );
}
