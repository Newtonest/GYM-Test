export default function ProfileInfo({username, description}) {
    return (
        <div className="Profile__info-container">
            <div className="Profile__info-container__name-container">
                <h1>{username}</h1>
            </div>
            <div className="Profile__info-container__description-container">
                {description}
            </div>
        </div>
    )
}