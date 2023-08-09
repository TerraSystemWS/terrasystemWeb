import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image'

const navigation = [
	{ name: 'Serviços', href: '/servicos' },
	{ name: 'Docs & Posts', href: '/repository' },
	{ name: 'Marketplace', href: '/marketplace' },
	{ name: 'Sobre', href: '/sobre' },
]

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


	return (
		<div>
			<Head>
				<title>TerraSystem, Soluções Tech e Web</title>
			</Head>
			<div className="bg-white overflow-hidden">
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
							{navigation.map((item) => (

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
										{navigation.map((item) => (
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

				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						{/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								algum publicaçao de blog...{' '}
								<Link href="/repository/posts/id_do_post">
									<a className="font-semibold text-indigo-600">
										<span className="absolute inset-0" aria-hidden="true" />
										ver mais <span aria-hidden="true">&rarr;</span>
									</a></Link>
							</div>
						</div> */}
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Soluções Tech e Web: Seu Sucesso Online
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Fortaleça sua presença digital com produtos, desenvolvimento web e hospedagem confiáveis. Conecte-se conosco e comece sua jornada!
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link href="/contatos"><a

									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Começar
								</a></Link>
								<Link href="/servicos_extra">
									<a className="text-sm font-semibold leading-6 text-gray-900">
										ver mais <span aria-hidden="true">→</span>
									</a></Link>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
