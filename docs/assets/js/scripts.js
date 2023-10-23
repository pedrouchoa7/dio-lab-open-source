const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const searchValue = searchInput.value;

  const encodedSearchValue = encodeURIComponent(searchValue);
  const url = `https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community/${encodedSearchValue}.md`;

  window.open(url, '_blank');
});
