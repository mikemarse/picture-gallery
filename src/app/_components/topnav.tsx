import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function TopNav() {
	return (
		<nav className="justify-between flex items-center w-full p-4 text-xl border-b font-semibold">
			<div>Gallery</div>
			<div>
				<SignedOut>
					<SignInButton>
						<button className="cursor-pointer">Sign In</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}
