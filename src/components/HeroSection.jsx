import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function HeroSection({ topStory, sideStories }) {
    if (!topStory) return null;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Main Featured Story */}
            <div className="lg:col-span-2 group">
                <Link href={`/article/${topStory.id}`} className="block h-full relative overflow-hidden rounded-xl shadow-md">
                    <div className="relative h-[400px] w-full">
                        {topStory.image ? (
                            <Image
                                src={topStory.image}
                                alt={topStory.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mb-3 font-semibold uppercase">
                                {topStory.category}
                            </span>
                            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-red-200 transition-colors">
                                {topStory.title}
                            </h1>
                            <p className="text-gray-200 line-clamp-2 md:line-clamp-none hidden md:block mb-4 max-w-2xl">
                                {topStory.summary}
                            </p>
                            <div className="flex items-center text-gray-300 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{topStory.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Side Stories */}
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl text-gray-800 border-l-4 border-red-600 pl-3">
                    Top Trending
                </h2>
                <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                    {sideStories.map((story) => (
                        <Link key={story.id} href={`/article/${story.id}`} className="group flex gap-3 items-start p-2 hover:bg-gray-50 rounded transition">
                            <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-200">
                                {story.image && (
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-700 line-clamp-2 leading-snug">
                                    {story.title}
                                </h3>
                                <span className="text-xs text-gray-500 mt-1">{story.category}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
