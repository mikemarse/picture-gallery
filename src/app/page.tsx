import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {

	const images = await db.query.images.findMany({
		orderBy: (models, { asc }) => asc(models.id),
	});

	return (
		<div className="flex flex-wrap gap-4">
			{images.map((post) => (<div className="w-48 flex flex-col" key={post.id}>{
				<div className="flex flex-col gap-1">
					<img src={post.url}/>
					<div>{post.name}</div>

				</div>
			}</div>))}
		</div>

		);
}

export default async function HomePage() {


  return (
		<main className="p-4">
			<SignedOut>
				<div className="h-full w-full text-2xl text-center justify-center">Please sign in above</div>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	);
}
