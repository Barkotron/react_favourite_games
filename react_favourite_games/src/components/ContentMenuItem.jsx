

export default function ContentMenuItem({ itemKey, content }) {
    const backgroundImg = { 'background-position': 'center', backgroundImage: `url(${content.image})` };
    return (
        <div className="content-menu-item" style={backgroundImg}>
            <div className="grey-background">
                <h3>{content.fullName}</h3>
                <p><i>"{content.tagLine}"</i></p>
                <p key={itemKey}>
                    {content.content}
                </p>
            </div>
        </div>
    );
}