import React from 'react'

const Comments = () => {
  return (
    <div className='comments'>

        <div className="comment">
            <a href="profile"><h4>@username</h4></a>
            <ul>
                <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p></li>
            </ul>
        </div>

        <div className="comment">
        <a href="profile"><h4>@username</h4></a>
            <ul>
                <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p></li>
            </ul>
        </div>

        <div className="comment">
        <a href="profile"><h4>@username</h4></a>
            <ul>
                <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Comments
