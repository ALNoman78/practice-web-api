const categories = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    log(data.categories);
}
categories()

const contentSection = async (searchText = '') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`);
    const data = await res.json()
    bannerSection(data.videos);
}

contentSection()

function timeHours(time){
    const hours = parseInt(time / 3600)
    let remainingSecond = hours % 3600
    const minutes = parseInt(remainingSecond / 60)
    // remainingSecond = remainingSecond % 60; // ${remainingSecond} sec

    return `${hours} hrs ${minutes} min`
}

const showItems = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => bannerSection(data.category))
    .catch(error => console.log(error))
}
showItems()


const modalSection = async (dataX) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${dataX}`);
    const data = await res.json()
    displayDetails(data.video)
}

const displayDetails = (videoData) => {
    const boxContainer = document.getElementById('modalBox')
    // console.log(boxContainer);
    document.getElementById('customModal').showModal()

    boxContainer.innerHTML = `
        <img class="w-full" src = "${videoData.thumbnail}">
        <p>${videoData.description}</p>
    `
    console.log(videoData);
}
// displayDetails()
