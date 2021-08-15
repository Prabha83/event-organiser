import { ReactNode } from "react";

type Props = {
    alertType: string;
    children: ReactNode;
};

export default function Alert({ alertType, children }: Props) {
    return (
        <div className={`notification ${alertType}`}>
            <button className="delete"></button>
            {children}
        </div>
    );
}
