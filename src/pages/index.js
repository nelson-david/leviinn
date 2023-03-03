import Layout from "@/layouts/Layout";
import { Suspense, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import AppLoader from "@/utils/appLoader";

const LandingPage = dynamic(() => import('../content/LandingPage'), {
	suspense: true,
})

const Home = () => {

	const [loading, setLoading] = useState(true);

    useEffect(() => {
		setTimeout(function(){
			setLoading(false);
		}, 2000)
    }, [])

	return (
		<>
			<Suspense fallback={<AppLoader />}>
				{loading&&(<AppLoader />)}
				<Layout>
					<LandingPage />
				</Layout>
			</Suspense>
		</>
	)
}

export default Home;