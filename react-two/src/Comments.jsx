import {use} from 'react'
export default function Comments ({fetchComments}) {

  const comments = use(fetchComments);
  console.log(comments);
  

      return (
        <>
        <div className='card2'>
            <h3>All comments: {comments.length}</h3>

        </div>
        </>
      )
}