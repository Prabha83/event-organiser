import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavHeader from "./NavHeader";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <NavHeader />
            <main className={styles.main}>
                <section className="section">{children}</section>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
