import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

	const images = await db.query.images.findMany({
		orderBy: (models, { desc }) => desc(models.id),
	});

  return (
		<main className="p-4">
			<div className="flex flex-wrap gap-4">
				{[...images, ...images, ...images].map((post) => (<div className="w-48 flex flex-col" key={post.id}>{
					<div className="flex flex-col gap-1">
						<img src={post.url}/>
						<div>{post.name}</div>

					</div>
				}</div>))}
			</div>
		</main>
	);
}
