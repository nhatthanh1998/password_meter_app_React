import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      upper:0,
      length:0,
      number:0,
      special:0,
      total:0,
      password:''
    }
  }
  handle_change_password(){
    var password = this.state.password
    if(password.length > 6){
      this.setState({
        length:1
      })
    }else{
      this.setState({
        length:0
      })
    }

    var numReg = new RegExp('[0-9]+')
    if(numReg.test(password) === true){
      this.setState({
        number:1
      })
    }else{
      this.setState({
        number:0
      })
    }

    var upperReg = new RegExp('[A-Z]+')
    if(upperReg.test(password) === true){
      this.setState({
        upper:1
      })
    }else{
      this.setState({
        upper:0
      })
    }

    var specialReg = new RegExp('[^A-Za-z0-9]')
    if(specialReg.test(password) === true){
      this.setState({
        special:1
      })
    }else{
      this.setState({
        special:0
      })
    }

    this.setState({
      total:this.state.number + this.state.upper + this.state.length+this.state.special
    })
  }

  render_length(){
    if(this.state.length === 0){
      return (
        <div style={{color:"red"}}>Password phải có từ 7 kí tự trở lên</div>
      )
    }else{
      return(
      <div style={{color:"green"}}>Password phải có từ 7 kí tự trở lên</div>
      )
    }
  }

  render_upper(){
    if(this.state.upper === 0){
      return (
        <div style={{color:"red"}}>Password phải có ít nhất 1 kí tự viết hoa</div>
      )
    }else{
      return(
      <div style={{color:"green"}}>Password phải có ít nhất 1 kí tự viết hoa</div>
      )
  }
}
  render_number(){
    if(this.state.number === 0){
      return (
        <div style={{color:"red"}}>Password phải có ít nhất 1 số</div>
      )
    }else{
      return(
      <div style={{color:"green"}}>Password phải có ít nhất 1 số</div>
      )
  }
  }
  
  render_special(){
    if(this.state.special === 0){
      return (
        <div style={{color:"red"}}>Password phải có ít nhất 1 kí tự đặc biệt [/,.$#@ ...]</div>
      )
    }else{
      return(
      <div style={{color:"green"}}>Password phải có ít nhất 1 kí tự đặc biệt [/,.$#@ ...]</div>
      )
  }
  }

  render_status(){
    if(this.state.total === 0){
        return <h3 style={{color:"green"}}>Thang đo bảo mật</h3>
    }
    else if(this.state.total>0 && this.state.total<2){
      return <h3 style={{color:"red"}}>Password yếu</h3>
    }
    else if(this.state.total >=2 && this.state.total<=3){
      return <h3 style={{color:"#01579b"}}>Password vừa</h3>
    }
    else{
      return <h3 style={{color:"green"}}>Password mạnh</h3>
    }
  }


  render() {
    return (
      <div style={{
        width: "100%",
        minHeight: "100vh",
        background:"#b2dfdb "
      }}>
        <div className="col" style={{textAlign:"center",color:"green"}}><h1>Password Strength Meter App</h1></div>
        <div className="container pt-5">
          <div className="row">
            <div
              className="col-sm-7">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={async event=>{
                  await this.setState({
                    password:event.target.value
                  })
                  this.handle_change_password()
                }}
                />

            </div>
            <div className="col" style={{borderRadius:"25px",background:"#e0f2f1"}}>
            
            <ul style={{listStyleType:"none"}}>
              <li className="mt-2">{this.render_status()}</li>
              <li>{this.render_length()}</li>
              <li>{this.render_upper()}</li>
              <li>{this.render_number()}</li>
              <li className="mb-5">{this.render_special()}</li>
            </ul>

          </div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
