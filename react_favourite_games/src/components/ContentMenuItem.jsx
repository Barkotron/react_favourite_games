

export default function ContentMenuItem({itemKey,content})
{
    const backgroundImg = {backgroundImage: `url(${content.image})`};
    return (
        <div className="content-menu-item" style={backgroundImg}>
        <h3>{content.fullName}</h3>
        <p><i>"{content.tagLine}"</i></p>
        <p key={itemKey}>
            {content.content}
        </p>
       {/* <img src={content.image}></img>*/}
        </div>
    );
}