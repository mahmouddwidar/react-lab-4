import React, { useContext } from 'react';
import CommentsContext from '../ContextApis/CommentsContext';

export default function Comments() {
    let {comments} = useContext(CommentsContext);
    return (
        <div>
            <h1 className='text-center mt-3'>Comments</h1>
            <hr />
            {
                comments ? comments.map((comment)=> {
                    return (
                        <div key={comment.id} className='p-2 border border-3 mb-4 rounded'>
                            <p className='text-start border border-1 rounded p-2 w-25'>{comment.name}</p>
                            <p className='text-start'>{comment.body}</p>
                            <p className='text-secondary'>{comment.email}</p>
                        </div>
                    )
                }) : (<div>Loading...</div>)
            }
        </div>
    )
}
