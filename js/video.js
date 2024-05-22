async function video(){
    const response = await fetch("https://juwelrana34.github.io/api/generalMember.json")
    const data = await response.json()

    document.querySelector(".video").innerHTML=`${data.video.map((vdieo2)=>{
        
        return`
    <div class="flex justify-center mx-2 my-3">
      <div class="rounded-lg shadow-lg bg-white  max-w-sm">
        <iframe  class="rounded-t-md relative w-full h-[240px]" src="${vdieo2.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
          <div class="p-6">
              <h5 class=" text-xl  font-semibold mb-2 text-indigo-600 ">${vdieo2.title}</h5>
              <p class="text-gray-700 text-base mb-4">
            ${vdieo2.about}
              </p>
              <a href="https://youtube.com/@jnuits?si=PLug-5fRu78kiYEu">
                 <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">visit youtube</button>
              </a>
          </div>
      </div>
  </div>
        `
    }).join(" ")}`
}

video()