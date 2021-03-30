import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

            <Link href="/about/">
                <a className="mr-5 hover:text-gray-900">About me</a>
            </Link>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>

            <Link href="/contact-us/">
                <a className="mr-5 hover:text-gray-900">Contact Me</a>
            </Link>
        </nav>
    )
}
