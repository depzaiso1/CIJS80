const socialCardArr = [
  {
    id:0,
    name: "Facebook",
    imgSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
  },
  {
    id:1,
    name: "Google",
    imgSRC: "https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
  },
  {
    id:0,
    name: "Apple",
    imgSRC: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
  },
]

const socialCard = (props) => {
  return (
    <div className = "social_card">
      <img src = {props.imgSRC} alt = "icon" style = {{width: "22px", height: "22px"}}/>
      <span>{props.name}</span>
    </div>
  )
}

export {socialCard, socialCardArr};