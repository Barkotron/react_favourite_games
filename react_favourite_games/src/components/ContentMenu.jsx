import { useState } from 'react'
import ContentMenuItem from './ContentMenuItem';
export default function ContentMenu({ content }) {
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    return (
        <>
            <menu>

                {content.map((item, index) =>
                    <button
                        className={activeContentIndex === index ? "active" : ""}
                        onClick={() => setActiveContentIndex(index)}
                    >
                        {item.tabName}
                    </button>
                )}

            </menu>

            <div>
                <ContentMenuItem key={content[activeContentIndex]} content={content[activeContentIndex]}></ContentMenuItem>
            </div>
        </>
    );
}