import React, { useContext } from 'react'
import CommentsContext from '../ContextApis/CommentsContext'

export default function CommentsTable() {
    let {comments} = useContext(CommentsContext);

    return (
        <>
        <h1 className='mt-3 text-center'>Comments Table</h1>
        <hr />
        {
            comments ? comments.map((comment)=> {
                return(
                    <>
                    <table class="table table-striped" key={comment.id}>
                        <thead>
                            <tr>
                            <th scope="col" className='col-1'>#</th>
                            <th scope="col" className='col-2'>Name</th>
                            <th scope="col" className='col-8'>Comment</th>
                            <th scope="col" className='col-1'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
    
                            <tr>
                                <th scope="row">{comment.id}</th>
                                <td>{comment.name}</td>
                                <td>{comment.body}</td>
                                <td>{comment.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                )
            }) : <div className='text-center mt-3'>Loading...</div>
        }
        </>
    )
}
