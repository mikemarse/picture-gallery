import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrl = [
	"https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
	"https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
	"https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
	"https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
];

const mockPost = mockUrl.map((url, index) => ({
	id: index + 1,
	url,
}));

export default async function HomePage() {

	const posts = await db.query.posts.findMany();

  return (
		<main className="p-4">
			<div className="flex flex-wrap gap-4">
				{posts.map((post) => (<div key={post.id}>{post.name}</div>))}
				{[...mockPost, ...mockPost, ...mockPost].map((image, index) => (
					<div key={image.id + '-' + index} className="w-48">
						<img src={image.url}/>
					</div>
					))
				}
			</div>
		</main>
	);
}
