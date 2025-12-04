import Link from "next/link";

export default function HomePage() {

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

  return (
		<main className="p-4">
			<div className="flex flex-wrap gap-4">
				{[...mockPost, ...mockPost, ...mockPost].map((image) => (
					<div key={image.id} className="w-48">
						<img src={image.url}/>
					</div>
					))
				}
			</div>
		</main>
	);
}
