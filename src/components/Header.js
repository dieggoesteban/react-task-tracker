import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onAdd} 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close': 'Add Task'}>                    
            </Button>
        </header>
    )
}

export default Header
