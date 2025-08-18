import Button from "../button/button";

interface AvailabilityProps {
    heading?: string;
    text?: string;
}

export default function Availability({
    heading = "Current availability",
    text = "Available for contract or freelance projects"
}: AvailabilityProps) {
    return (
        <section>
            <h2 className="above-heading">{heading}</h2>
            <p>{text}</p>
            <Button text="Get in touch"/>
        </section>
    );
}
