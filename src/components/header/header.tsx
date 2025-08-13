import style from "./header.module.css";
import Button from "../button/button";
import Availability from "../availability/availability";

export default function Header() {
    return (
        <main className={style.headerWrapper}>
            <div className={style.header}>
                <p className="above-heading">Hi, I&apos;m</p>
                <h1>Chris Gorrod</h1>
                <h2 className="subheading">Software Engineer & Engineering Manager</h2>
            </div>

            <Availability />
        </main>
    );
}