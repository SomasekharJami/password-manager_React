import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import outputFile from '../outputFile'

import './index.css'

class dataGettingFile extends Component {
  state = {
    mainList: [],
    webSite: '',
    userName: '',
    passWord: '',
    searchBar: '',
    passCheck: false,
  }

  onTypingWeb = event => {
    this.setState({webSite: event.target.value})
  }

  onTypingName = event => {
    this.setState({userName: event.target.value})
  }

  onTypingPass = event => {
    this.setState({passWord: event.target.value})
  }

  onSearching = event => {
    this.setState({searchBar: event.target.value})
  }

  onToggling = () => {
    this.setState(prevState => ({
      passCheck: !prevState.passCheck,
    }))
  }

  onAdding = event => {
    event.preventDefault()
    const {webSite, userName, passWord} = this.state

    const newList = {
      id: uuidv4(),
      webSite,
      userName,
      passWord,
    }

    this.setState(prevState => ({
      mainList: [...prevState.mainList, newList],
      webSite: '',
      userName: '',
      passWord: '',
    }))
  }

  onDelete = id => {
    const {mainList} = this.state
    const filteredList = mainList.filter(eachList => eachList.id !== id)
    this.setState({mainList: filteredList})
  }

  onRenderingImg = () => (
    <div className="noPassCon">
      <img
        className="noPassImg"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p className="noPassP">No Passwords</p>
    </div>
  )

  render() {
    const {
      mainList,
      webSite,
      userName,
      passWord,
      searchBar,
      passCheck,
    } = this.state
    const finalList = mainList.filter(eachValue =>
      eachValue.webSite.toLowerCase().includes(searchBar.toLowerCase()),
    )
    const count = finalList.length

    return (
      <div className="mainCon">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="firstCon">
          <form className="formCon" onChange={this.onAdding}>
            <h1 className="inpH">Add New Password</h1>
            <div className="inpCon">
              <img
                className="webImg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                className="inpEl"
                onChange={this.onTypingWeb}
                value={webSite}
                placeholder="Enter Website"
              />
            </div>
            <div className="inpCon">
              <img
                className="webImg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                className="inpEl"
                onChange={this.onTypingName}
                value={userName}
                placeholder="Enter Username"
              />
            </div>
            <div className="inpCon">
              <img
                className="webImg"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="password"
              />
              <input
                type="password"
                className="inpEl"
                onChange={this.onTypingPass}
                value={passWord}
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="mainBton">
              Add
            </button>
          </form>
          <img
            className="mainImg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="secondCon">
          <div className="head">
            <div className="bottomHead">
              <h1 className="headH">Your Passwords</h1>
              <p className="headP">{count}</p>
            </div>
            <div className="searchCon">
              <img
                className="searchImg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                className="searchInp"
                onChange={this.onSearching}
                value={searchBar}
              />
            </div>
          </div>
          <hr />
          <div className="toggleCon">
            <input
              type="checkbox"
              checked={passCheck}
              onChange={this.onToggling}
              className="checkBox"
              id="check"
            />
            <label htmlFor="check" className="showP">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.onRenderingImg()
          ) : (
            <ul className="listCon">
              {finalList.map(eachItem => (
                <outputFile
                  key={eachItem.id}
                  itemDetails={eachItem}
                  onDelete={this.onDelete}
                  passCheck={passCheck}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default dataGettingFile
