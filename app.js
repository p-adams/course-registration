const COMPUTER_SCIENCE = [
    {id: 1, num: 1234,  name: 'Intro to Programming', credits: 4, time: '11:40AM', days: 'MWTRF', seats: 35, enrolled: false},
    {id: 2, num: 1235,  name: 'Programming Languages', credits: 3, time: '4:00PM', days: 'MWF', seats: 25, enrolled: false},
    {id: 3, num: 1236,  name: 'Data Structures', credits: 3, time: '12:10PM', days: 'MWTR', seats: 35, enrolled: false},
    {id: 4, num: 1237,  name: 'Algorithm Design and Analysis', credits: 4, time: '10:00AM', days: 'MWTRF', seats: 25, enrolled: false},
    {id: 5, num: 1238,  name: 'Machine Learning',  credits: 3, time: '11:50AM', days: 'MWF', seats: 25, enrolled: false}
    
]

const MATHEMATICS = [
    {id: 1, num: 2234,  name: 'Linear Algebra', credit: 4, time: '4:00AM', days: 'MWF', seats: 35, enrolled: false}
]
const LINGUISTICS = []

var CS = React.createClass({
    render: function(){
       var details = this.props.cs.map(function( c){
            return(
                    <tr key={c.id}className="course-details">        
                        <td key={1}>{c.num}</td>
                        <td key={2}>{c.name}</td>
                        <td key={3}>{c.credits}</td>
                        <td key={4}>{c.time}</td>
                        <td key={5}>{c.days}</td>
                        <td key={6}>{c.seats}</td>
                        <td>
                        <button className="btn btn-default">Drop</button>
                        <button className="btn btn-default">Add</button>
                        </td>
                    </tr>
                    )
       })
        return (
            <div className="classes">
                <h4>Classes</h4>
                <table>
                    <thead>
                    <tr>
                        <th>Course #</th>
                        <th>Course name</th>
                        <th>Credit hours</th>
                        <th>Time</th>
                        <th>Days</th>
                        <th>Seats available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                    </tbody>
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
    render: function(){
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