const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', (e)=>{
	e.preventDefault();
	const userlink = searchInput.value;
    sessionStorage.setItem("userlink", userlink);
    location.reload();
    location.reload();
    
})