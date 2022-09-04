const boxs = document.querySelectorAll('.box')

window.addEventListener('scroll', checkbox)

function checkbox() {
	const tirggerbottom = window.innerHeight / 5 * 4

	boxs.forEach(box=>{
		const boxTop = box.getBoundingClientRect().top

		if(boxTop<tirggerbottom) {
			box.classList.add('show')
		} else{
			box.classList.remove('show')
		}
	})
}