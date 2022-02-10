import React, { useState } from "react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


const itemsList = ["Leaders", "Stocks", "Crypto", "Options (coming soon)"]
const getItems = () =>
    itemsList
        .map((_, ind) => ({ id: `${_}` }));

const InteractionSection = () => {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    return (
        <section>
            <ScrollMenu 
            LeftArrow={LeftArrow} 
            RightArrow={RightArrow}
            scrollToSelected={false}
            >
                {items.map(({ id }) => (
                    <Card
                        itemId={id} // NOTE: itemId is required for track items
                        title={id}
                        key={id}
                        onClick={handleClick(id)}
                        selected={isItemSelected(id)}
                    />
                ))}
            </ScrollMenu>
        </section>
    )
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            {'<'}
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            {'>'}
        </Arrow>
    );
}

function Arrow({
    children,
    disabled,
    onClick,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                right: '1%',
                opacity: disabled ? '0' : '1',
                userSelect: 'none',
                border: 'none',
                background: 'transparent'
            }}
        >
            {children}
        </button>
    );
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '160px',
            }}
            tabIndex={0}
        >
            <div className="card">
                <div>{title}</div>
            </div>
        </div>
    );
}
export default InteractionSection