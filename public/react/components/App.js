// import React, { useState, useEffect } from 'react';
// import { Page } from './Page';
// import { PagesList } from './PagesList';
// import { AddPage } from './AddPage';

// // import and prepend the api url to any fetch calls
// import apiURL from '../api';

// export const App = () => {

// 	const [pages, setPages] = useState([]);

// 	async function fetchPages(){
// 		try {
// 			const response = await fetch(`${apiURL}/wiki`);
// 			const pagesData = await response.json();
// 			setPages(pagesData);
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}

// 	useEffect(() => {
// 		fetchPages();
// 	}, []);

// 	return (
// 		<main>
// 			<div>Welcome to...</div>	
//       <h1>BikiPedia🌍</h1>
// 			<h2>A free (bootleg) encyclopedia</h2>
// 			<div>-</div>
// 			<PagesList pages={pages} />
// 			{/* <h4 href='#'>Link</h4> */}
// 		</main>
// 	)
// }



// Working Code
import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import { PagesList } from './PagesList';
import { AddPage } from './AddPage';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [currentPageView, setCurrentPageView] = useState(0)
    const [pageView, setPageView] = useState({})

	const currentPageContent = [
		[
		<p key={1} onClick={() =>setCurrentPageView(2)}>Add page</p>, 
		// <p key={1} onClick={() =>setCurrentPageView(2)}>Discover</p>, 
		// <PagesList key={2} setPageView={setPageView} setCurrentPageView={setCurrentPageView} pages={pages} />
	],
	<Page page={pageView} setPageView={setPageView} setCurrentPageView={setCurrentPageView}/>,
	<AddPage setCurrentPageView={setCurrentPageView}/>
	]

	//page errors
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			<div>Welcome to...</div>	
      			<h1>BikiPedia🌍</h1>
				<h2>The (bootleg) online encyclopedia</h2>
				<div>-</div>
				{ currentPageContent[currentPageView] }
		</main>
	)
}
