import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function NewsCard({ article, compact = false }) {
    const { id, title, summary, image, category, date } = article;

    return (
        <Link href={`/article/${id}`} className="group block h-full">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col border border-gray-100">
                {/* Image Container */}
                <div className={`relative ${compact ? "h-32" : "h-48"} w-full bg-gray-200`}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400 text-sm font-medium">
                            No Image Available
                        </div>
                    )}
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold uppercase">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors ${compact ? "text-sm line-clamp-2" : "text-lg line-clamp-2"}`}>
                        {title}
                    </h3>

                    {!compact && summary && (
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                            {summary}
                        </p>
                    )}

                    <div className="flex items-center text-gray-400 text-xs mt-auto pt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
