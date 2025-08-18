import styles from './button.module.css';

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({ text, type = 'button', className = '' }: ButtonProps) {
    return (
        <button type={type} className={`${styles.button} ${styles[className]}`}>
            {text}
        </button>
    );
}
