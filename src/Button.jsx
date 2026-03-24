const Button = ({btnText}) => {
  return (
    <div className="button-wrapper" >
        <button className="bg-gray-200 text-[11px] py-[6px] px-3 rounded font-semibold">{btnText}</button>
    </div>
  )
}

export default Button