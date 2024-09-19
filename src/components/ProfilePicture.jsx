import '../styles/components/profile-picture.css';


export default function ProfilePicture({src}){
    return (
        <div className="image-container">
                <button>
                    <img className="profile__image" src={src} alt="User-Img"/>      
                </button>          
        </div>
    )
}