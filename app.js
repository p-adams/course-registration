const COMPUTER_SCIENCE = [
    {id: 1, num: 1234,  name: 'Intro to Programming', time: '11:40AM', days: 'MWTRF', seats: 35, enrolled: false}
    
]

const MATHEMATICS = [
    {id: 1, num: 2234,  name: 'Linear Algebra', time: '4:00AM', days: 'MWF', seats: 35, enrolled: false}
]
const LINGUISTICS = []


//this component should be generic enough to render
// course details from any department
var CS = React.createClass({
    render: function(){
       var details = this.props.cs.map(function(c){
            return(
                    <div>
                        <span>       
                            <td>{c.num}</td>
                            <td>{c.name}</td>
                            <td>{c.time}</td>
                            <td>{c.days}</td>
                            <td>{c.seats}</td>
                            <button>Drop</button>
                            <button>Add</button>
                        </span>
                    </div>
                    )
       })
        return (
            <div className="classes">
                <h4>Classes</h4>
                <table>
                <tr>
                    {details}
                </tr>
                </table>
            </div>
        )
    }
})

var ComputerScience = React.createClass({
    render: function(){
        return (
            <div>
                <CS cs={this.props.cs}/> 
            </div>
        )
    }
})

var Mathematics = React.createClass({
    render: function(){
        return (
            <div>
                <CS cs={this.props.cs}/>
            </div>
        )
    }
})

var DeptMenu = React.createClass({
    showSummary: function(){
        var dept = this.props.dept
        return dept === 'Computer Science' ? ' Data Structures and Algorithms' :
        dept === 'Mathematics' ? ' Algebra and Calculus' : dept === 'Linguistics' ?
        ' Morphology and Syntax' : dept === 'Engineering' ? 'Thermodynamics and Physics' : null
    },
    render: function(){
        var summary = this.showSummary()
        return (
            <div className="dept-menu">
                <div className="form-group">
                    <label htmlFor="depts">Search courses by department: </label>
                            <select className="form-control" onChange={this.props.changeDept}>
                                <option>Computer Science</option>
                                <option>Mathematics</option>
                                <option>Linguistics</option>
                            </select> 
                        </div>
                    <br/>
                <span>Department chosen: {this.props.dept} - {summary}</span>
                {this.props.dept==='Computer Science' ? <ComputerScience cs={this.props.cs}/> :
                this.props.dept==='Mathematics' ? <Mathematics cs={this.props.ma}/> : ' meow'
                }
            </div>
        )
    }
})
var ClassRegistration = React.createClass({
    getInitialState: function(){
        return {dept: 'Computer Science'}
    },
    changeDept: function(e){
        this.setState({dept: e.target.value})
    },
    render: function(){
      
        return (
            <div className="class-reg">
                <h1>FooBar University</h1><hr/>
                <div className="container">
                    <div className="jumbotron">
                        <DeptMenu
                            dept={this.state.dept}
                            changeDept={this.changeDept}
                            cs={this.props.cs}
                            ma={this.props.ma}
                            ling={this.props.ling}/>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<ClassRegistration cs={COMPUTER_SCIENCE} ma={MATHEMATICS} ling={LINGUISTICS}/>, document.getElementById('app'))