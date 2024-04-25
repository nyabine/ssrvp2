export default function Button({onClick, label}) {
    return (
      <button onClick={onClick} style={{background: "blue"}}>
          {label}
      </button>
    )
  }