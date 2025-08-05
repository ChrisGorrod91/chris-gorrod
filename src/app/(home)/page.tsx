// Make sure the path is correct; adjust if necessary:
import Button from "../../components/button/button";

export default function Page() {
    return (
        <main>
            <div>
                <p className="above-heading">Hi, I&apos;m</p>
                <h1>Chris Gorrod</h1>
                <h2 className="subheading">Software Engineer & Engineering Manager</h2>
                <Button text="Get in touch"/>
            </div>
        </main>
    );
}

