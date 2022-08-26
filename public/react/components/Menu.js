import React from 'react';

export const Menu = (props) => {

	return <>
    <a href='#'>Home 🏚️</a>
    <div>-</div>
    <a href='#'>Log in 💻</a>
    <div>-</div>
    <a href='#'>Random article 📖 </a>


		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
	</>
} 

module.exports = {Menu}