export default async function Advice() {
  let adviFet = await 
fetch("https://api.adviceslip.com/advice")
  let advi = await adviFet.json()
  console.log(advi)
return advi;
}