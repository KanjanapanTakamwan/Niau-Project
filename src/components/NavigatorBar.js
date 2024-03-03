import Link from "next/link"
import styles from "./styles/navbar.module.css"
export default function Navigator() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbox}>
                <Link href="/"><img src="/home.svg" /></Link>
                    <Link href="/"> Home</Link></div>

                <div className={styles.navbox}>
                <Link href="/recommended"><img src="/recom.svg" /></Link>
                    <Link href="/recommended"> Recommended</Link></div>

                <div className={styles.navbox}>
                <Link href="/search" ><img src="/search.svg" /></Link>
                    <Link href="/search" > Search</Link></div>

                <div className={styles.navbox}>
                <Link href="/profile"><img src="/user.svg" /></Link>
                    <Link href="/profile">Profile</Link></div>

            </div>
        </div>
    )
}