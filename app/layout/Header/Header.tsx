import "./Header.css";

interface HeaderI {
    title?: string
}

export default function Header({title}: HeaderI) {
    return (<header className="main-head">
            <h1>{title ?? "TaskList"}</h1>
        </header>);
}