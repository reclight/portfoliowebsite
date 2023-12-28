import Image from 'next/image'

export default function Loading() {
    return (
        <div className="relative overflow-hidden bg-cyan-600">
            <div className="flex h-screen">
                <div className="m-auto">
                    <Image
                        src="/loading.gif"
                        alt="Loading Page"
                        className="dark:invert my-5"
                        width={230}
                        height={100}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}