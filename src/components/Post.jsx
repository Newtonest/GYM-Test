import { faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Post = () => {
  return (
    <div className="feed-post">
        <h4>@username</h4>
        <img src="/assets/img/example.jpg" alt="" />
        <div className="post-likes">
            <p> <FontAwesomeIcon icon={faDumbbell} size="sm" /> 78 </p>
        </div>
        
    </div>
  )
}

export default Post
