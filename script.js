let generate = document.querySelector("#generate")
let showName = document.querySelector("#showName");

let names = ["Britney Spears", "Tom Hanks", "Jim Carrey", "Nicholas Cage", "Rory Johnson", "Mariah Carey", "Anthony Albanese", "Keanu Reeves", "Kanye West"]

showName.textContent = "?"

const setName = (choosenName) => {
    showName.textContent = choosenName;
  }

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const scrollThrough = async () => {
    for (let i = 0; i < names.length; i++) {
      await sleep(50)
      setName(names[i])
    }
    await getRandomName();
  }
  

generate?.addEventListener('click', event => {
    showName.style.color = "white";
    scrollThrough();
});

const getRandomName = () => {
    console.log('generate name')
    const ranNum = Math.floor(Math.random() * names.length)
    showName.style.color = "red";
    setName(names[ranNum])
}
