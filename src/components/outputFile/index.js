import './index.css'

const outputFile = props => {
  const {itemDetails, onDelete, passCheck} = props
  const {id, webSite, userName, passWord} = itemDetails
  const passwordItem = passCheck ? (
    <p className="detailP">{passWord}</p>
  ) : (
    <img
      className="detailImg"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  const onDeleting = () => {
    onDelete(id)
  }
  return (
    <li className="listItem">
      <p className="imgP">{webSite[0]}</p>
      <div className="detailsCon">
        <p className="detailP">{webSite}</p>
        <p className="detailP">{userName}</p>
        {passwordItem}
      </div>
      <button
        className="delBton"
        type="button"
        onClick={onDeleting}
        data-testid="delete"
      >
        <img
          className="delImg"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default outputFile
