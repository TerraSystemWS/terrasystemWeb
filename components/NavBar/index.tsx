import Link from 'next/link';
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


interface NavigationItem {
	name: string;
	href: string;
  }
  
  interface NavbarProps {
	nav: NavigationItem[];
  }

const Navbar: React.FC<NavbarProps> = ({nav}) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="absolute inset-x-0 top-0 z-50">
					<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
						<div className="flex lg:flex-1">
							<Link href="/" >
								<a className="-m-1.5 p-1.5 flex items-center space-x-4">
									<Image
										className="h-14 w-auto"
										src="https://res.cloudinary.com/coyas/image/upload/v1691545378/terrasystem/terrasystemweb/logo-sembg-black_cnthas.png"
										alt="Logo"
										width={50}
										height={50}
									/>
									<span className="ml-auto text-md font-semibold text-black" >TerraSystem</span>
								</a>
							</Link>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{nav.map((item: any) => (

								<Link key={item.name} href={item.href}><a className="text-sm font-semibold leading-6 text-gray-900">
									{item.name}
								</a></Link>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<Link href="/login">
								<a className="text-sm font-semibold leading-6 text-gray-900">
									Log in <span aria-hidden="true">&rarr;</span>
								</a></Link>
						</div>
					</nav>
					<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
						<div className="fixed inset-0 z-50" />
						<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<Link href="/">
									<a className="-m-1.5 p-1.5">
										<Image
											className="h-8 w-auto"
											src="https://res.cloudinary.com/coyas/image/upload/v1691545378/terrasystem/terrasystemweb/logo-sembg-black_cnthas.png"
											alt="logo"
											width={40}
											height={40}
										/>

									</a></Link>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{nav.map((item: any) => (
											<Link key={item.name}
												href={item.href}>
												<a
													className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
												>
													{item.name}
												</a></Link>
										))}
									</div>
									<div className="py-6">
										<Link href="/login">
											<a
												className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-50"
											>
												Log in
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</Dialog>
				</header>
	);
};

export default Navbar;

