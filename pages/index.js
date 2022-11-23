import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <ul>
            <li>
                <Link href="/ssg">SSG - Static Site Generation</Link>
            </li>
            <li>
                <Link href="/ssr">SSR - Server Side Rendering</Link>
            </li>
        </ul>
    )
}
