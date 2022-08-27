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
import { LogIn } from './LogIn';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	//Add page content
	const [pages, setPages] = useState([]);
	const [currentPageView, setCurrentPageView] = useState(0)
    const [pageView, setPageView] = useState({})

	const currentPageContent = [
		[
		<p key={1} onClick={() =>setCurrentPageView(2)}>Add page ➕</p> 
		],
	<Page page={pageView} setPageView={setPageView} setCurrentPageView={setCurrentPageView}/>,
	<AddPage setCurrentPageView={setCurrentPageView}/>
	]

	// Login page content
	const [pages2, setPages2] = useState([]);
	const [currentPageView2, setCurrentPageView2] = useState(0)
    const [pageView2, setPageView2] = useState({})

	const currentPageContent2 = [
		[
		<p key={1} onClick={() =>setCurrentPageView2(2)}>Log In 👤</p> 
		],
	<LogIn page2={pageView2} setPageView2={setPageView2} setCurrentPageView2={setCurrentPageView2}/>,
	<LogIn setCurrentPageView2={setCurrentPageView2}/>
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
			<login>{ currentPageContent2[currentPageView2] }</login>
      			<h1>BikiPedia🌍</h1>
				<h2>The (bootleg) online encyclopedia</h2>
				<addpage>{ currentPageContent[currentPageView] }</addpage>
				<h2>Explore</h2>
				<pageslist><PagesList pages={pages}/></pageslist>
	
		</main>
	)
}
