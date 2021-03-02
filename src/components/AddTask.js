import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit= (e) => {
        e.preventDefault()

        if(!text){
            alert('Pleae add a task')
            return
        }
            onAdd({text, day, reminder})

            setText('')
            setDay('')
            setReminder(false)
        }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="AddTask">Task</label>
                <input type="text" placeholder="Add Task" name="AddTask" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="DayTime">Day & time</label>
                <input type="text" placeholder="Day & time" name="DayTime" 
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="SetRminder">Set Reminder</label>
                <input type="checkbox" name="SetRminder" 
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
