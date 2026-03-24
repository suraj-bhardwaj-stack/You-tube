import Button from "./Button"

const ButtonList = () => {
    const buttonList = ['All', 'Music', 'Mixes', 'T-series' , 'APIs' , 'Landing Pages' , 'Podcasts']
  
  return (
    <div className="button-list-wrapper flex gap-3">
      {
        buttonList.map(btn => <Button key={btn} btnText={btn} />)
      }
      
    </div>
  )
}

export default ButtonList