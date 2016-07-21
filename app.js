const COMPUTER_SCIENCE = [
    {id: 1, num: 1234,  name: 'Intro to Programming', credits: 4, time: '11:40AM', days: 'M-W-TR-F', seats: 35, enrolled: false},
    {id: 2, num: 1235,  name: 'Programming Languages', credits: 3, time: '4:00PM', days: 'M-W-F', seats: 25, enrolled: false},
    {id: 3, num: 1236,  name: 'Data Structures', credits: 3, time: '12:10PM', days: 'M-W-TR', seats: 35, enrolled: false},
    {id: 4, num: 1237,  name: 'Algorithm Design and Analysis', credits: 4, time: '10:00AM', days: 'M-W-TR-F', seats: 25, enrolled: false},
    {id: 5, num: 1238,  name: 'Machine Learning',  credits: 3, time: '11:50AM', days: 'M-W-F', seats: 25, enrolled: false}
    
]

const MATHEMATICS = [
    {id: 6, num: 2234,  name: 'Linear Algebra', credits: 4, time: '4:00PM', days: 'M-T-W-F', seats: 20, enrolled: false},
    {id: 7, num: 2235,  name: 'Calculus 1', credits: 4, time: '1:00PM', days: 'M-W-TR-F', seats: 35, enrolled: false},
    {id: 8, num: 2236,  name: 'Calculus 2', credits: 4, time: '3:50PM', days: 'T-W-TR-F', seats: 35, enrolled: false},
    {id: 9, num: 2237,  name: 'Probability', credits: 3, time: '9:00AM', days: 'M-W-F', seats: 25, enrolled: false},
    {id: 10, num: 2238,  name: 'Differential Geometry', credits: 4, time: '11:15AM', days: 'M-T-W-F', seats: 15, enrolled: false},
    {id: 11, num: 2239,  name: 'Differential Equations', credits: 3, time: '11:45AM', days: 'M-W-F', seats: 15, enrolled: false}
]
const LINGUISTICS = [

    {id: 12, num: 3234,  name: 'Introduction to Linguistics', credits: 4, time: '5:00PM', days: 'M-T-W-F', seats: 35, enrolled: false},
    {id: 13, num: 3235,  name: 'Morphology', credits: 3, time: '1:00PM', days: 'M-W-T-F', seats: 15, enrolled: false},
    {id: 14, num: 3236,  name: 'Phonology', credits: 3, time: '3:50PM', days: 'T-W-TR', seats: 15, enrolled: false},
    {id: 15, num: 3237,  name: 'Syntax', credits: 4, time: '9:00AM', days: 'M-T-W-F', seats: 25, enrolled: false},
    {id: 16, num: 3238,  name: 'Analysis of Literature', credits: 4, time: '10:15AM', days: 'M-T-W-F', seats: 25, enrolled: false},
    {id: 17, num: 3239,  name: 'Modern English Grammar', credits: 3, time: '3:45PM', days: 'M-W-F', seats: 35, enrolled: false}

]

var CS = React.createClass({
    render: function(){
        var self = this
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
                        
                        <button 
                            onClick={self.props.add.bind(null, c)}
                            className="btn btn-default"
                        >
                        Add</button>
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

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h3>Register for Fall classes now!</h3>
            </div>
        )
    }
})

var ComputerScience = React.createClass({
    render: function(){
        return (
            <div>
                <CS
                    schedule={this.props.schedule}
                    add={this.props.add}
                    cs={this.props.cs}
                /> 
            </div>
        )
    }
})

var Mathematics = React.createClass({
    render: function(){
        return (
            <div>
                <CS add={this.props.add} cs={this.props.cs}/>
            </div>
        )
    }
})

var Linguistics = React.createClass({
    render: function(){
        return (
            <div>
                <CS add={this.props.add} cs={this.props.cs}/>
            </div>
        )
    }
})

var DeptMenu = React.createClass({
    showOptions: function(){
        var option = this.props.dept
        return this.props.dept === 'Select department' ? <Home/> :
            this.props.dept==='Computer Science' ?
            <ComputerScience
                schedule={this.props.schedule}
                add={this.props.add}
                cs={this.props.cs}/> :
            this.props.dept==='Mathematics' ? 
            <Mathematics 
                add={this.props.add}
                cs={this.props.ma}/> : 
            <Linguistics 
                add={this.props.add}
                cs={this.props.ling}/>
    },
    render: function(){
        return (
            <div className="dept-menu">
                <div className="form-group">
                    <label htmlFor="depts">Offered this Fall: </label>
                            <select className="form-control" onChange={this.props.changeDept}>
                                <option>Select department</option>
                                <option>Computer Science</option>
                                <option>Mathematics</option>
                                <option>Linguistics</option>
                            </select> 
                        </div>
                    <br/>
               
                {this.showOptions()}
            </div>
        )
    }
})

var Schedule = React.createClass({
    render: function(){
        var self = this
        //console.log(this.props.schedule)
        var schedule = this.props.schedule.map(function(s, index){
            return (
                <tr key={index}>
                    <td key={1}>{s.course}</td>
                    <td key={2}>{s.time}</td>
                    <td key={3}>{s.days}</td>
                    <td>
                        <button
                            className="btn btn-default"
                            onClick={self.props.drop.bind(null, index)}
                          >
                        Drop</button></td>
                </tr>
                )
        })
        
        return (
            <div className="schedule">
            <h4>Your Fall semester schedule</h4>
            <table>
            <thead>
                    {schedule}
            </thead>
            </table>
            </div>
        )
    }
})


var ClassRegistration = React.createClass({
    getInitialState: function(){
        return {dept: 'Select department', schedule: []}
    },
    changeDept: function(e){
        this.setState({
            dept: e.target.value
        })
    },
    addClass: function(c){
         var details =  [{
            course: c.name, 
            credits: c.credits,
            time: c.time,
            days: c.days,
            enrolled: true
        }]
        
    this.setState({schedule: this.state.schedule.concat(details)})
    },
    dropClass: function(index){
        this.setState({schedule: this.state.schedule.splice(0,1)})
    },
    render: function(){ 
        return (
            <div className="class-reg">
            <h1>FooBar University</h1><hr/>
                <div className="container">
                <Schedule
                    schedule={this.state.schedule}
                    drop={this.dropClass}
                    />
                    <div className="jumbotron">      
                        <DeptMenu
                            dept={this.state.dept}
                            changeDept={this.changeDept}
                            add={this.addClass}
                            schedule={this.state.schedule}
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