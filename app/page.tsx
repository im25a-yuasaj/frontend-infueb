import Link from 'next/link';
async function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Home</h1>
            <ul>
                <li>
                    <Link href="/user">User</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home
