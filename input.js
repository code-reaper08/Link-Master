// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener('click', (e)=>{
// 	e.preventDefault();
// 	const userlink = searchInput.value;
//     sessionStorage.setItem("userlink", userlink);
//     location.reload();
//     location.reload();
    
// })



$("#search-button").dblclick(function(e) { 
    console.log("dbl click simulated ");
    e.preventDefault();
    const userlink = $("#search-input").val();
    sessionStorage.setItem("userlink", userlink);
    location.reload();
    // alert('dblclick');
  });
  $("#search-button").click(function() { 
    // alert('click');
    $(this).dblclick(); 
  });
  
//   $("#container2").click(function() { 
//     $("#container").click();
//   });