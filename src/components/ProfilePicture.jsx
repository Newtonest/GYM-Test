import '../styles/components/profile-picture.css';
export default function ProfilePicture({src}){
    return (
        <div className="image-container">
                <button>
                    <img src={src} alt="User-Img"/>      
                </button>          
        </div>
    )
}