import { faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfilePicture from "./ProfilePicture"


const Post = () => {
  return (
    <div className="feed-post">
        <h4>@username</h4>
        <a href="post">
          <img src="/assets/img/example.jpg" alt="" />
        </a>
        <div className="post-likes">
            <p> <FontAwesomeIcon icon={faDumbbell} size="sm" /> 78 </p>
        </div>
        
    </div>
  )
}

export default Post
