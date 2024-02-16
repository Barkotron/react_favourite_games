export default function ContentMenuItem({itemKey,content})
{
    return (
        <li key={itemKey}>
            {content}
        </li>
    );
}