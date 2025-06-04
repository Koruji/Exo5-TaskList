import MainNav from "~/navigation/MainNav";
import "./Header.css";

interface HeaderI {
    title?: string
}

export default function Header({title}: HeaderI) {
    // en react on doit utiliser className
    // au niveau de ts on évite le type any parce que ca enlève toutes les vérif
    return (<header className="main-head">
            <h1>{title ?? "React IPSSI"}</h1>
            <MainNav/>
        </header>);
}