const log = (data) => {
    const navContainer = document.getElementById('categories')
    data.forEach(categories => {
        const headerButton = document.createElement('div')
        headerButton.innerHTML = `
            <button onclick = "showItems(${categories.category_id})"  class = "btn multi_btn">
                ${categories.category}
            </button>
        `;
        navContainer.appendChild(headerButton)
    });
}

const bannerSection = (data) => {
    const banner = document.getElementById('bannerContainer')
    banner.innerHTML = ""
    if(data.length === 0){
        banner.classList.remove('grid')
        banner.innerHTML = `
            <div class = "flex justify-center items-center gap-4 flex-col min-h-[50vh]">
                <img class = "" src = "./assets/icon.png">
                <p class = "text-4xl text-center font-medium">NO CONTENT HERE</p>
            </div>
        `
        // console.log('maisa monoara moule');
    }else{
        banner.classList.add('grid')
    }
    data.forEach((content) => {
        console.log(content);
        const card = document.createElement('div')
        card.innerHTML = `
            <div class="card bg-base-100 md:w-96 w-full shadow-xl">
            <figure>
                <img class = "w-full h-[280px] object-cover relative"
                src="${content.thumbnail}"
                alt="Shoes" />
                ${content.others.posted_date?.length === 0 ? '' : `<span class = "absolute top-48 right-1 p-3 rounded-lg bg-black text-white">
                ${timeHours(content?.others?.posted_date)}`}
            </figure>
            <div class="card-body">
                <div class = "flex gap-4">
                    <div>
                        <img class = "w-10 h-10 object-cover rounded-full" src = "${content.authors[0].profile_picture}">
                    </div>
                <div>
                    <h2 class="card-title">
                    ${content.title}
                    </h2>
                    <div class = "inline-flex items-center gap-2">
                        <p>${content.authors[0].profile_name}</p>
                        ${content.authors[0].verified === true ? `<img class = "w-4 h-4 bg-transparent" src="https://cdn-icons-png.flaticon.com/512/9247/9247768.png">` : ''}
                    </div>
                    <p class = "font-medium">${content.others.views}</p>
                </div>
            </div>
            <button onclick="modalSection('${content.video_id}')" class = "btn btn-error text-white">
                Details
            </button>
            </div>
        `
        banner.appendChild(card)
    })
}

document.getElementById('search-input').addEventListener('keyup', (e)=>{
    contentSection(e.target.value);
})