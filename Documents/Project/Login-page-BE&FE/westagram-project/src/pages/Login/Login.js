import React from 'react'
import './Login.scss'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      pw: '',
      idCondition: '',
      pwCondition: '',
    }
  }

  handleIdInput = (e) => {
    this.setState({
      id: e.target.value,
      idCondition: this.state.id.indexOf('@') !== -1,
    })
  }

  handlePwInput = (e) => {
    this.setState({
      pw: e.target.value,
      pwCondition: this.state.pw.length >= 5,
    })
  }

  //   goToMain = () => {
  //     this.props.history.push('/Main-Moonsil')
  //   }

  handleLogin = () => {
    fetch('BE로 부터 받은 api주소 입력', {
      //주소는 end point가 signup/signin 두개를 받을 예정,
      method: 'POST', //default값으로는 GET이며 GET일 경우엔 따로 body요청  없음
      body: JSON.stringify({
        email: this.state.id, // key: value 가 들어가야하는데 이 부분은 BE와 합의된 것으로 적어야 한다
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      //   .then((result) => console.log('결과: ', result))
      .then((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token)
          this.props.history.push('/')
        } else {
          alert('아이디/비밀번호를 다시 입력해주세요!')
        }
      })
  }

  render() {
    return (
      <div className="Login">
        <div className="loginContainer">
          <header>
            <h1> westagram </h1>
          </header>

          <main>
            <form className="loginForm">
              <input
                onChange={this.handleIdInput}
                className="forId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.handlePwInput}
                className="forPw"
                type="password"
                placeholder="비밀번호"
              />
              <button
                onClick={this.handleLogin} // 걸어주세용
                className="loginButton"
                style={
                  this.state.idCondition && this.state.pwCondition
                    ? { opacity: '100%' }
                    : { opacity: '50%' }
                }
                // className="loginButton-active"
              >
                로그인
              </button>
            </form>
          </main>

          <footer>
            <a className="findingPW" href="#">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
