const inputComponentArr = [
  {
    id:0,
    name: "text",
    inputType: "text",
    title: "Email/So dien thoai/Ten dang nhap"
  },
  {
    id:1,
    name: "password",
    inputType: "password",
    title: "Mat khau"
  }
]

const inputComponent = (props) => {
  const {inputType, title, name} = props
  return (
    <div className = "input_component">
      <input type = {inputType} className="input_component_inside" placeholder = {title} name = {name}/>
    </div>
  )
}

export {inputComponent, inputComponentArr};