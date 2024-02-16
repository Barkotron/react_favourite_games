export default function ContentMenuItem({itemKey,content})
{
    return (
        <>
        <h3>{content.fullName}</h3>
        <p key={itemKey}>
            {content.content}
        </p>
        </>
    );
}