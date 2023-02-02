const textComponentArr = [
  {
    id:0,
    title: "Quen mat khau"
  },
  {
    id:1,
    title: "Dang nhap voi SMS"
  }
]

const textComponent = (props) => {
  return (
    <div className = "text_component" style = {{}}>
      {props.title}
    </div>
  )
}

export {textComponent, textComponentArr};