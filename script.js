let generate = document.querySelector("#generate")
let showName = document.querySelector("#showName");

let names = ["Sydney Harbour Bridge", "COVID-19", "Eucalyptus Tree", "Chocolate", "Rory Johnson", "Basketball", "Chai Tea", "Wedding Ring", "Kanye West"]

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
    showName.style.color = "#66ff00";
    setName(names[ranNum])
}
